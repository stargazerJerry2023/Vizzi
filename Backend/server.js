const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
app.use(bodyParser.json());

const mongoDBUrl = process.env.MONGODB_URL;

console.log('MongoDB URL:', mongoDBUrl);


mongoose.connect(mongoDBUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected to Business database'))
.catch(err => console.log('Error connecting to MongoDB:', err));




const businessSchema = new mongoose.Schema({
  name: String,
  description: String,
}, { collection: 'List_Women' });


const List = mongoose.model('List', businessSchema);


app.get('/api/List', async (req, res) => {
  try {
    const businesses = await List.find();
    res.json(businesses);
  } catch (error) {
    console.error('Error fetching businesses:', error);
    res.status(500).json({ message: 'Error fetching business data' });
  }
});


app.get('/', (req, res) => {
  res.send('Backend is running!');
});


app.post('/api/List', async (req, res) => {
    try {
        const business = new List(req.body);
        const savedBusiness = await business.save();
        res.status(201).json(savedBusiness);
      } catch (error) {
        res.status(400).json({ error: 'Error adding business' });
      }
    });
    
    
    const port = process.env.PORT || 3000;
    app.listen(port, () => console.log(`Server running on port ${port}`));
    
    