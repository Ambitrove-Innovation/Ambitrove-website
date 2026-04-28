import { GoogleGenerativeAI, type Content } from "@google/generative-ai";

type NetlifyEvent = {
  httpMethod: string;
  body: string;
  headers: Record<string, string | undefined>;
};

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
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  try {
    const { messages } = JSON.parse(event.body);
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      throw new Error("GEMINI_API_KEY is not configured");
    }

    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({
      model: "gemini-flash-latest",
      systemInstruction: COMPANY_CONTEXT,
    });

    // We assume the last message is from the user
    const lastMessage = messages[messages.length - 1].content;
    
    // Format history for Gemini API
    const history: Content[] = messages.slice(0, -1).map((m: { role: string; content: string }) => ({
      role: m.role === "assistant" ? "model" : "user",
      parts: [{ text: m.content }],
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
      }
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
      body: JSON.stringify({ error: error instanceof Error ? error.message : "An unknown error occurred" }),
    };
  }
};
