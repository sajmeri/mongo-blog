const proxy = require('http-proxy-middleware');

// module.exports = function(app) {
//     app.use(proxy('/api/**', { target: 'http://localhost:8080' }));
//     // app.use(proxy('/otherApi/**', { target: 'http://localhost:5000' }));
// };

const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const app = express();
app.use(proxy('/api/**', { target: 'http://localhost:8080' }));
app.use(express.static(path.join(__dirname, 'build')));

app.get('/ping', function (req, res) {
 return res.send('pong');
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(process.env.PORT || 8080);