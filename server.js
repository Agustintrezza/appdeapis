const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(__dirname + '/dist'))

app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname + '/dist/index.html'));});

app.listen(process.env.PORT || 8080);


console.log('El servidor está corriendo!');

// comment // "heroku-postbuild": "ng-build --prod", "build": "ng build", "postinstall": "ng build --aot --target=production"
//    "watch": "ng build --watch --configuration development",