//gitignore node_modules permet d'ignorer et de ne pas installer les dépendances
// create module: https://www.youtube.com/watch?v=xHLd36QoS4k / https://www.youtube.com/watch?v=DZ_bRk8JWDM
//how to create json file from data: https://www.youtube.com/watch?v=ot5h1FFy7jk / http://codepen.io/KryptoniteDove/post/load-json-file-locally-using-pure-javascript

//dans browser: localhost:8084 => display Salut tout le monde
//require library 'http' to create a web server
var http = require('http');

//save server into the variable 'server'
var server=http.createServer(function(req,res){
    //when user is connected
    res.writeHead(200);     //200 means "ok everything is alright" otherwise 404 for "not found page"
    res.end('Salut tout le monde');
});
//server listens port 8084
server.listen(8084);


var express = require('express');
var path = require('path');
var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');
var port = 8084;
var app = express();

//var leboncoin = require('./leboncoin.js');
//var meilleursagents = require('./meilleursagents.js');
//console.log(leboncoin);


//run the server
app.listen(port);
//exports = module.exports = app;
