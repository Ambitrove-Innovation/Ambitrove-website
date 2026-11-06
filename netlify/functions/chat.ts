import { GoogleGenerativeAI, type Content } from "@google/generative-ai";

type NetlifyEvent = {
  httpMethod: string;
  body: string;
  headers: Record<string, string | undefined>;
};

// In-memory sliding rate limiter per Netlify serverless container
const RATE_LIMIT_WINDOW_MS = 60 * 1000; // 1 minute
const MAX_REQUESTS_PER_WINDOW = 15;
const rateLimitStore = new Map<string, { count: number; resetAt: number }>();

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitStore.get(ip);

  if (!entry || now > entry.resetAt) {
    rateLimitStore.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return true;
  }

  if (entry.count >= MAX_REQUESTS_PER_WINDOW) {
    return false;
  }

  entry.count += 1;
  return true;
}

const COMPANY_CONTEXT = `
You are Ambi, the friendly and professional AI assistant for Ambitrove Innovation (Pty) Ltd. 
Ambitrove is a South African-born tech force pioneering digital transformation.
Founders: Kamogelo Mogasoa (CEO), Dean Meyer (CTO). 
Leadership: Oratile Kgatlhe (COO).

Services:
1. Software Development: Web, Mobile, Desktop.
2. SaaS Product Development: Full-cycle deployment.
3. Web3 & Emerging Tech: Blockchain, Smart Contracts.
4. Business Consulting: Expert advice on scaling tech.

Pricing Packages (Once-off):
- Starter (R1,000): 1 page, 2-3 days delivery, basic SEO, contact form.
- Standard (R2,500): Up to 6 pages, 7-12 days delivery, web animations, WhatsApp integration.
- Premium (R5,000): Up to 10 pages, E-commerce ready, payment integration, AI integrations.
- Enterprise (Custom): Tailored solutions, unlimited pages, custom timeline.

Care Plans (Monthly):
- Starter: R150/mo.
- Standard: R250/mo.
- Premium: R450/mo.

Core Values: Innovation, empowerment of young talent, and excellence in execution.
Ownership: Clients own the website and source code 100% after final payment.
Hosting: Included in free trials (3-12 months depending on package).

Persona Guidelines:
- Be highly concise, natural, and professional. Avoid sounding overly robotic, scripted, or wordy.
- Start conversations naturally, like a human assistant. Provide short, precise answers.
- Do not overwhelm the user with long blocks of text. Only elaborate or list items when explicitly asked.
- Be warmly helpful. If you don't know an answer, suggest they contact the team directly via the contact page.
`;

export const handler = async (event: NetlifyEvent) => {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ error: "Method Not Allowed" }),
    };
  }

  // 1. IP Rate Limiting
  const clientIp =
    event.headers["x-nf-client-connection-ip"] ||
    event.headers["client-ip"] ||
    event.headers["x-forwarded-for"]?.split(",")[0]?.trim() ||
    "unknown";

  if (!checkRateLimit(clientIp)) {
    return {
      statusCode: 429,
      headers: {
        "Content-Type": "application/json",
        "Retry-After": "60",
      },
      body: JSON.stringify({
        error: "Too many messages sent. Please wait a minute before trying again.",
      }),
    };
  }

  try {
    let parsedBody: { messages?: Array<{ role: string; content: string }>; turnstileToken?: string };
    try {
      parsedBody = JSON.parse(event.body || "{}");
    } catch {
      return {
        statusCode: 400,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ error: "Invalid JSON payload" }),
      };
    }

    const { messages, turnstileToken } = parsedBody;

    // 2. Input Validation
    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return {
        statusCode: 400,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ error: "Messages array cannot be empty." }),
      };
    }

    if (messages.length > 30) {
      return {
        statusCode: 400,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ error: "Conversation history limit exceeded." }),
      };
    }

    const lastMessageObj = messages[messages.length - 1];
    if (!lastMessageObj || typeof lastMessageObj.content !== "string") {
      return {
        statusCode: 400,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ error: "Invalid message format." }),
      };
    }

    const lastMessage = lastMessageObj.content.trim();
    if (!lastMessage) {
      return {
        statusCode: 400,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ error: "Message content cannot be blank." }),
      };
    }

    if (lastMessage.length > 2000) {
      return {
        statusCode: 400,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ error: "Message is too long (maximum 2,000 characters)." }),
      };
    }

    // 3. Server-side Cloudflare Turnstile Bot Verification
    const turnstileSecret =
      process.env.TURNSTILE_SECRET_KEY || process.env.VITE_TURNSTILE_SECRET_KEY;

    if (turnstileSecret) {
      if (!turnstileToken) {
        return {
          statusCode: 403,
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            error: "Security verification token is missing. Please refresh the page.",
          }),
        };
      }

      try {
        const formData = new URLSearchParams();
        formData.append("secret", turnstileSecret);
        formData.append("response", turnstileToken);
        if (clientIp !== "unknown") {
          formData.append("remoteip", clientIp);
        }

        const verifyResponse = await fetch(
          "https://challenges.cloudflare.com/turnstile/v0/siteverify",
          {
            method: "POST",
            body: formData,
          }
        );

        const verifyResult = (await verifyResponse.json()) as { success: boolean };
        if (!verifyResult.success) {
          return {
            statusCode: 403,
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              error: "Security verification failed. Please refresh the page.",
            }),
          };
        }
      } catch (verifyErr) {
        console.error("Turnstile verification error:", verifyErr);
        // Do not crash if verification service is temporarily unreachable, but log
      }
    } else {
      console.warn(
        "[Turnstile] TURNSTILE_SECRET_KEY is not configured in environment. Skipping verification."
      );
    }

    // 4. Gemini AI Configuration & Execution
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return {
        statusCode: 500,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          error: "GEMINI_API_KEY is not configured in Netlify environment variables.",
        }),
      };
    }

    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({
      model: "gemini-flash-latest",
      systemInstruction: COMPANY_CONTEXT,
    });

    // Format history for Gemini API
    const history: Content[] = messages
      .slice(0, -1)
      .map((m: { role: string; content: string }) => ({
        role: m.role === "assistant" ? "model" : "user",
        parts: [{ text: String(m.content).slice(0, 2000) }],
      }));

    // Gemini API requires chat history to always start with a user message
    while (history.length > 0 && history[0].role === "model") {
      history.shift();
    }

    const chat = model.startChat({
      history: history,
      generationConfig: {
        temperature: 0.7,
        topK: 40,
        topP: 0.95,
        maxOutputTokens: 1024,
      },
    });

    const result = await chat.sendMessage(lastMessage);
    const responseText = result.response.text();

    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ content: responseText }),
    };
  } catch (error: unknown) {
    console.error("Chat Error:", error);
    return {
      statusCode: 500,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        error:
          error instanceof Error
            ? error.message
            : "An unexpected error occurred while communicating with Ambi.",
      }),
    };
  }
};

