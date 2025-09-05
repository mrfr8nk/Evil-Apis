// GPT API Scraper
// Created by Mr. Frank

const GPTAPI = {
  name: "GPT-3.5 Chat",
  category: "ai",
  description: "Chat with OpenAI's GPT-3.5 model. Created by Mr. Frank.",
  url: "https://kaiz-apis.gleeze.com/api/gpt-3.5",
  method: "GET",
  params: [
    { name: "q", type: "text", placeholder: "Your message", required: true },
    { name: "apikey", type: "hidden", value: "cf2ca612-296f-45ba-abbc-473f18f991eb" }
  ],
  example: "Hi"
};

export default GPTAPI;
