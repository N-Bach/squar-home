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

app.get('/products/mychat', (req, res) => {
  res.sendFile(path.join(publicPath + '/mychat.html'));
});

app.get('/products/callhome', (req, res) => {
  res.sendFile(path.join(publicPath + '/callhome.html'));
});

app.get('/products/landofmagic', (req, res) => {
  res.sendFile(path.join(publicPath + '/landofmagic.html'));
});

app.get('/contactus', (req, res) => {
  res.sendFile(path.join(publicPath + '/contactus.html'));
});

app.get('/community-standards', (req, res) => {
  res.sendFile(path.join(publicPath + '/community.html'));
});

app.get('/privacy', (req, res) => {
  res.sendFile(path.join(publicPath + '/privacy.html'));
});

app.get('/terms-of-service', (req, res) => {
  res.sendFile(path.join(publicPath + '/terms.html'));
});

app.listen(PORT, () => {
  console.log('Server is listenning at', PORT);
});
