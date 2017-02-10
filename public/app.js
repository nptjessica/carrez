//gitignore node_modules permet d'ignorer et de ne pas installer les dépendances
// create module: https://www.youtube.com/watch?v=xHLd36QoS4k / https://www.youtube.com/watch?v=DZ_bRk8JWDM
//how to create json file from data: https://www.youtube.com/watch?v=ot5h1FFy7jk / http://codepen.io/KryptoniteDove/post/load-json-file-locally-using-pure-javascript

var express = require('express');
var path = require('path');
var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');
var port = 8084;
var app = express();

//var leboncoin = require('./leboncoin');
//var meilleursagents = require('./meilleursagents.js');
//console.log(leboncoin("https://www.leboncoin.fr/locations/1078290739.htm?ca=12_s"));



var maScrape = require('./meilleursagents');
var maURL = "https://www.meilleursagents.com/prix-immobilier/le-bourget-93350/";
console.log(maScrape(maURL));

var lbcScrape = require("./leboncoin");
var lbcURL = "https://www.leboncoin.fr/locations/1078290739.htm?ca=12_s";
console.log(lbcScrape(lbcURL));



//run the server
app.listen(port);
//exports = module.exports = app;
