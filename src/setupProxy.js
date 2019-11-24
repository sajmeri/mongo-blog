const proxy = require('http-proxy-middleware');

const express = require('express');
const bodyParser = require('body-parser')
// const path = require('path');
const app = express();

module.exports = function(app) {
    // const path = require('path');
    app.use(proxy('/api/**', { target: 'http://localhost:8080' }));
    // app.use(proxy('/otherApi/**', { target: 'http://localhost:5000' }));

    // app.use(app.static(path.join(__dirname, 'build')));

    // app.get('/ping', function (req, res) {
    //     return res.send('pong');
    // });

    // app.get('/', function (req, res) {
    //     res.sendFile(path.join(__dirname, 'build', 'index.html'));
    // });

    // app.listen(process.env.PORT || 8080);
};


