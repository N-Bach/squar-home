const express = require('express');
const path = require('path');
var bodyParser = require('body-parser');
var app = express();

const PORT = process.env.PORT || 3000;

const publicPath = path.join(__dirname, '../public');

app.use(express.static(publicPath));

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'X-Requested-With');
  req.header('Access-Control-Allow-Origin', '*');
  req.header('Access-Control-Allow-Headers', 'X-Requested-With');
  next();
});

app.use(bodyParser.urlencoded({ extended: false }));

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

// app.get('/products/fastsell', (req, res) => {
//   res.sendFile(path.join(publicPath + '/fastsell.html'));
// });

app.get('/products/mingalarbarmorning', (req, res) => {
  res.sendFile(path.join(publicPath + '/mingalarbarmorning.html'));
});

app.get('/products/landofmagic', (req, res) => {
  res.sendFile(path.join(publicPath + '/landofmagic.html'));
});

app.get('/products/myhero', (req, res) => {
  res.sendFile(path.join(publicPath + '/myhero.html'));
});

app.get('/products/hawkhero', (req, res) => {
  res.sendFile(path.join(publicPath + '/hawkhero.html'));
});

app.get('/products/myfish', (req, res) => {
  res.sendFile(path.join(publicPath + '/myfish.html'));
});

app.get('/products/luckywingabar', (req, res) => {
  res.sendFile(path.join(publicPath + '/luckywingabar.html'));
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

app.get('/test-game', (req, res) => {
  res.sendFile(path.join(publicPath + '/test-game.html'));
});

app.post('/game/score', (req, res) => {
  console.log(req.method);
  console.log(req.baseUrl);
  console.log('----------------> Header');
  console.log(req.headers);
  console.log('----------------> Params');
  console.log(req.params);
  console.log('----------------> Query');
  console.log(req.query);
  console.log('----------------> body');
  if (req.body) {
    console.log(req.body);
    console.log('the score is: ', req.body.score);
    console.log('message is: ', req.body.mes);
  } else {
    console.log('no body in request');
  }
  res.send(JSON.stringify({ data: 12 }));
});

app.listen(PORT, () => {
  console.log('Server is listenning at', PORT);
});
