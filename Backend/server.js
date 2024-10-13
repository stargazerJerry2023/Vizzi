const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const axios = require('axios');
const cors = require('cors'); 
require('dotenv').config();

const app = express();
app.use(cors());
app.use(bodyParser.json()); // To parse JSON requests

const mongoDBUrl = process.env.MONGODB_URL;


console.log('OpenAI API Key:', process.env.OPENAI_API_KEY);

mongoose.connect(mongoDBUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected to Business database'))
  .catch(err => console.log('Error connecting to MongoDB:', err));



  console.log('OpenAI API Key:', process.env.OPENAI_API_KEY);

app.post('/api/chatgpt', async (req, res) => {
    const { prompt } = req.body;
    console.log('Prompt received:', prompt);
  
    try {
      const response = await axios.post(
        'https://api.openai.com/v1/chat/completions',
        {
          model: "gpt-3.5-turbo",
          messages: [{ role: "user", content: prompt }],
        },
        {
          headers: {
            'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
            'Content-Type': 'application/json',
          },
        }
      );
  
      console.log('Response from OpenAI:', response.data); // Log the response from OpenAI
      res.json(response.data.choices[0].message);
    } catch (error) {
      console.error('Error calling OpenAI API:', error); // Log the error
      res.status(500).json({ error: 'Failed to fetch response from OpenAI API' });
    }
  });
  

// Root route to check if the server is running
app.get('/', (req, res) => {
  res.send('Backend is running!');
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));
