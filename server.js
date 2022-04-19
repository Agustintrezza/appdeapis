const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(__dirname + '/dist/app-agusher'))

app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname + '/dist/app-agusher/index.html'));});

app.listen(process.env.PORT || 8080);

console.log('El servidor esta corriendo!!')

// comment

// comment // "heroku-postbuild": "ng-build --prod", "build": "ng build", "postinstall": "ng build --aot --target=production"
//    "watch": "ng build --watch --configuration development",


// https://www.youtube.com/watch?v=0bOJjAUXjhI&ab_channel=WesDoyle    video del cual pude hacer el deploy a heroku