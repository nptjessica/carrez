//gitignore node_modules permet d'ignorer et de ne pas installer les dépendances
//web scraping with node.js https://www.youtube.com/watch?v=Wo5eMclb-G4&index=1&list=PLGquJ_T_JBMSfMO7yPR7kkZCJc8xQg0Gf
//how to create json file from data: https://www.youtube.com/watch?v=ot5h1FFy7jk / http://codepen.io/KryptoniteDove/post/load-json-file-locally-using-pure-javascript

var express = require('express');
var path = require('path');
var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');
var port = 8084;
var app = express();

//Step 4 - require('leboncoin')
var leboncoin = require("./leboncoin");
var lbcURL = "https://www.leboncoin.fr/ventes_immobilieres/977877757.htm?ca=12_s";
//console.log(leboncoin.lbcScrape(lbcURL));
//console.log(leboncoin.lbcScrapeRent(lbcURL));
console.log(leboncoin.lbcScrapeTown(lbcURL));

//Step 5 - require('meilleursagents')
var meilleursagents = require('./meilleursagents');
var maURL = "https://www.meilleursagents.com/prix-immobilier/" + leboncoin.lbcScrapeTown + "/";
//console.log(maScrape(maURL).lbcEnergyText);
//console.log(maScrape(maURL));
//console.log(meilleursagents.maScrapeAppart(maURL));
//console.log(meilleursagents.maScrapeHouse(maURL));
//console.log(meilleursagents.maScrapeRent(maURL));
//console.log(maURL);


app.get('/', function(req,res){
    res.sendFile(__dirname+'/index.html');

});

//run the server
app.listen(port);
//exports = module.exports = app;


/*app.post('/', function(req, res){

})*/