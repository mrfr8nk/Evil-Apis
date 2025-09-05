const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Serve static files
app.use(express.static('public'));

// API list endpoint
app.get('/api/list', (req, res) => {
  const apiDir = path.join(__dirname, 'api');
  fs.readdir(apiDir, (err, files) => {
    if (err) {
      return res.status(500).json({ error: 'Unable to read API directory' });
    }
    
    const jsFiles = files.filter(file => file.endsWith('.js'));
    res.json(jsFiles);
  });
});

// API configuration endpoints
app.get('/api/:apiName/config', (req, res) => {
  const apiName = req.params.apiName;
  const apiPath = path.join(__dirname, 'api', `${apiName}.js`);
  
  // Check if file exists
  if (!fs.existsSync(apiPath)) {
    return res.status(404).json({ error: 'API not found' });
  }
  
  // Import and return the API config
  const apiConfig = require(apiPath);
  res.json(apiConfig.default || apiConfig);
});

// API endpoints
app.get('/api/gpt', async (req, res) => {
  const { q } = req.query;
  
  if (!q) {
    return res.status(400).json({ error: 'Query parameter is required' });
  }
  
  try {
    const response = await fetch(`https://kaiz-apis.gleeze.com/api/gpt-3.5?q=${encodeURIComponent(q)}&apikey=cf2ca612-296f-45ba-abbc-473f18f991eb`);
    const data = await response.json();
    
    // Modify creator to Mr. Frank
    if (data.author) data.author = "Mr. Frank";
    
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/api/pinterest', async (req, res) => {
  const { search } = req.query;
  
  if (!search) {
    return res.status(400).json({ error: 'Search parameter is required' });
  }
  
  try {
    const response = await fetch(`https://kaiz-apis.gleeze.com/api/pinterest?search=${encodeURIComponent(search)}&apikey=cf2ca612-296f-45ba-abbc-473f18f991eb`);
    const data = await response.json();
    
    // Modify creator to Mr. Frank
    if (data.author) data.author = "Mr. Frank";
    
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/api/youtube', async (req, res) => {
  const { url } = req.query;
  
  if (!url) {
    return res.status(400).json({ error: 'URL parameter is required' });
  }
  
  try {
    const response = await fetch(`https://yt-dl.officialhectormanuel.workers.dev/?url=${encodeURIComponent(url)}`);
    const data = await response.json();
    
    // Modify creator to Mr. Frank
    if (data.creator) data.creator = "Mr. Frank";
    
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Serve the main page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
