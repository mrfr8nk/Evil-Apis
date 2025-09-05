// Pinterest API Scraper
// Created by Mr. Frank

const PinterestAPI = {
  name: "Pinterest Search",
  category: "search",
  description: "Search for images on Pinterest. Created by Mr. Frank.",
  url: "https://kaiz-apis.gleeze.com/api/pinterest",
  method: "GET",
  params: [
    { name: "search", type: "text", placeholder: "Search term", required: true },
    { name: "apikey", type: "hidden", value: "cf2ca612-296f-45ba-abbc-473f18f991eb" }
  ],
  example: "Dog"
};

export default PinterestAPI;
