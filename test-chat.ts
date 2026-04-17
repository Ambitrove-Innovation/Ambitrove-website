import { config } from "dotenv";
config();

import { handler } from "./netlify/functions/chat.js";

async function run() {
  const event = {
    httpMethod: "POST",
    body: JSON.stringify({
      messages: [
        { role: "user", content: "Hi! What are the services your company offers?" }
      ]
    })
  };

  console.log("Testing chat handler...");
  const response = await handler(event);
  console.log("Response Status:", response.statusCode);
  if (response.body) {
    console.log("Response Body:", JSON.parse(response.body));
  }
}

run().catch(console.error);
