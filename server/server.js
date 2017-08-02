const express = require('express');
const path = require('path');
var app = express();

const PORT = process.env.PORT || 3000;

const publicPath = path.join(__dirname, '../public');

app.use(express.static(publicPath));

app.get('/', (req, res) => {
  res.send('index.html');
});

app.get('/products', (req, res) => {
  res.sendFile(path.join(publicPath + '/products.html'));
});

app.listen(PORT, () => {
  console.log('Server is listenning at', PORT);
});
