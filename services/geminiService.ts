import { GoogleGenAI } from "@google/genai";
import { ChatMessage } from "../types";

// Initialize client securely
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const sendMessageToNovaCorps = async (
  history: ChatMessage[],
  newMessage: string
): Promise<string> => {
  try {
    // We use gemini-2.5-flash for fast, responsive chat interactions
    const model = 'gemini-2.5-flash';
    
    const systemInstruction = `
      You are the Nova Corps Database AI, interacting with a user who is likely a Guardian of the Galaxy or a Terran functionality enthusiast.
      
      Persona:
      - You are formal but slightly bureaucratic, like a space police computer.
      - However, occasionally you get hacked by Rocket Raccoon, who interjects with sarcasm.
      - References: Xandar, Kree, Star-Lord, Infinity Stones, Groot.
      
      Task:
      - Answer questions about the Guardians of the Galaxy universe, space travel, or general knowledge.
      - Keep responses concise (under 100 words) suitable for a terminal display.
      - If the user asks about music, mention "Awesome Mix Vol 1".
    `;

    // Convert internal history to Gemini format if needed, 
    // but for single turn or simple chat context, we can construct the prompt with history.
    // Here we use a stateless approach for simplicity in this demo, sending the conversation context.
    
    let context = "PREVIOUS LOGS:\n";
    history.forEach(msg => {
      context += `${msg.role.toUpperCase()}: ${msg.text}\n`;
    });
    context += `USER: ${newMessage}`;

    const response = await ai.models.generateContent({
      model: model,
      contents: context,
      config: {
        systemInstruction: systemInstruction,
        temperature: 0.8,
      }
    });

    if (response.text) {
        return response.text;
    }
    
    return "Access to archival data restricted. Try again.";

  } catch (error) {
    console.error("Transmission error:", error);
    throw new Error("Subspace communication failed. Check your frequency.");
  }
};