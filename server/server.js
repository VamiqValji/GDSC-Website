const express = require('express');
const { MongoClient } = require('mongodb');
const path = require('path'); // Import the 'path' module
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3001;

// Connection URI
const uri = 'mongodb+srv://test:test123@gdsc23-24.bvkb72w.mongodb.net/?retryWrites=true&w=majority';
const dbName = 'GDSC23-24';

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

app.use(express.json());
app.use(cors());

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Route handler for the root path
app.get('/', (req, res) => {
  // Send the HTML file when accessing the root path
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.post('/insertData', async (req, res) => {
  const { name, email, text } = req.body;
  console.log(name, email, text);

  try {
    await client.connect();

    const db = client.db(dbName);
    const collection = db.collection('GDSCsubmission');

    const result = await collection.insertOne({
      name: name,
      email: email,
      text: text,
    });

    console.log(`Inserted ${result.insertedCount} document with _id: ${result.insertedId}`);

    res.json({ success: true });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ success: false, error: 'An error occurred. Please try again.' });
  } finally {
    await client.close();
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
