
import { GoogleGenAI } from "@google/genai";

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  throw new Error("API_KEY environment variable not set");
}

const ai = new GoogleGenAI({ apiKey: API_KEY });

export async function generateResponse(systemInstruction: string, prompt: string): Promise<string> {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash", 
      contents: prompt,
      config: {
        systemInstruction: systemInstruction,
        temperature: 0.7,
        topP: 0.95,
      },
    });

    return response.text;
  } catch (error) {
    console.error("Error in generateResponse:", error);
    // Consider how to handle different error types, e.g., safety blocks
    if (error instanceof Error) {
        return `An error occurred while communicating with the AI. Details: ${error.message}`;
    }
    return "An unknown error occurred. Please check the console for details.";
  }
}
