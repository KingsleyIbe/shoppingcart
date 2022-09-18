const cors = require('cors');
const express = require('express');
const data = require('./productData');

const app = express();
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('Welcome to online shopping app api');
});

app.get('/products', (req, res) => {
  res.send([1, 2, 3]);
});

app.get('/items', (req, res) => {
  res.send(data);
});

const port = process.env.PORT || 5000;

app.listen(port, console.log(`Server running on port ${port}`));
