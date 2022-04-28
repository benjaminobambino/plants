const express = require('express');
const app = express();

// update this with your mongo connection string from running mongod
process.env.MONGOCONNECT = 'mongodb://127.0.0.1:27017/bucksPlants';

const connectDB = require('./config/db');
const storePlant = require('./src/storePlant');

// Connect database
// connectDB();

// Init Middleware
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('API Running'));

// Define Routes
app.post('/plants', async (req, res) => {
  // get plantName from request body
  const plantName = req.body.name;
  const desiredDatasource = req.body.datasource;

  // run our core logic
  storePlant(plantName, desiredDatasource);

  // tell user we were successful!
  return res.status(200).send('plant added!');
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () =>
  console.log(`🏎  ✔ Server started on port ${PORT} (/server.js)`)
);
