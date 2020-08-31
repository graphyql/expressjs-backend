const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.json({ msg: 'Hello!' });
});

app.get('/hello', (req, res) => {
  res.json({ msg: 'Hello!' });
});

app.get('/dashboard', (req, res) => {
  res.json({ msg: 'Hello!' });
});

app.listen(3000, () => console.log('Running on Port 3000'));