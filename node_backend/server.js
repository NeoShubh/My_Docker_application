var express = require('express');
var app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, '..','web_frontend')))

app.get('/', function (req, res) {
 
  res.sendFile(path.join(__dirname, '..','web_frontend','index.html'));
  res.send('Hello World!');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});