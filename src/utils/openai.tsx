import { OpenAI } from 'openai';
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export const responseGenerate = async (inputText: string) => {
  console.log('entrou')
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo-instruct",
      messages: [
        {"role": "system", "content": "You are a assistant helping user analyze their dreams. User will give you the desciprtion of the dream, you help me them analyze them. Respond should be in paragraph format, avoid using any markdown symbol"},
        {"role": "user", "content": `Write an analysis based on the description of my dream: "${inputText}"`}
      ]
    });
    return completion
}
