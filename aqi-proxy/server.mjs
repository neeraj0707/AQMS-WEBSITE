// server.js
import express from 'express';
import fetch from 'node-fetch';
import cors from 'cors';
const app = express();
const PORT = 3000;

app.use(cors()); // Allow all origins

// Define the root route
app.get('/', (req, res) => {
  res.send('Welcome to the AQI Proxy Server!');
});

app.get('/api/aqi', async (req, res) => {
  try {
    const response = await fetch("https://api.openaq.org/v3/latest?limit=10", {
      headers: {
        "X-API-Key": "1e82d8e39e8c6ed7a75d9f536bd212703eb84b29c095b31afae02a3d053eedf9", // Replace with your actual OpenAQ v3 API key
        "accept": "application/json"
      }
    });

    console.log("Status Code:", response.status); // Log response status

    if (!response.ok) {
      const text = await response.text(); // Log full response content
      console.error("Failed API response:", text);
      return res.status(response.status).json({ error: 'API Error', details: text });
    }

    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error("Server error:", error);
    res.status(500).json({ error: "Internal server error", details: error.message  });
  }
});

app.listen(PORT, () => {
  console.log(`Proxy server running at http://localhost:${PORT}`);
});
