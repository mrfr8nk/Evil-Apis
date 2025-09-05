// YouTube API Scraper
// Created by Mr. Frank

const YouTubeAPI = {
  name: "YouTube Downloader",
  category: "downloads",
  description: "Download YouTube videos in multiple formats. Created by Mr. Frank.",
  url: "https://yt-dl.officialhectormanuel.workers.dev/",
  method: "GET",
  params: [
    { name: "url", type: "text", placeholder: "YouTube URL", required: true }
  ],
  example: "https://youtube.com/watch?v=ox4tmEV6-QU"
};

export default YouTubeAPI;
