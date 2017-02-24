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
console.log(leboncoin.lbcScrapeRubric(lbcURL));
//Step 5 - require('meilleursagents')
var meilleursagents = require('./meilleursagents');
var maURL = "https://www.meilleursagents.com/prix-immobilier/" + leboncoin.lbcScrapeTown + "/";

app.get('/', function(req,res){res.sendFile(__dirname+'/index.html');});
app.get('/style.css', function(req,res){res.sendFile(__dirname+'/style.css');});
app.get('/leboncoin.js', function(req,res){res.sendFile(__dirname+'/leboncoin.js');});
app.get('/meilleursagents.js', function(req,res){res.sendFile(__dirname+'/meilleursagents.js');});
app.get('/index.js', function(req,res){res.sendFile(__dirname+'/index.js');});
app.get('/house.jpg', function(req,res){res.sendFile(__dirname+'/house.jpg');});
app.get('/in-love.png', function(req,res){res.sendFile(__dirname+'/in-love.png');});
app.get('/smiling.png', function(req,res){res.sendFile(__dirname+'/smiling.png');});
app.get('/confused.png', function(req,res){res.sendFile(__dirname+'/confused.png');});
app.get('/sad.png', function(req,res){res.sendFile(__dirname+'/sad.png');});

app.post('/', function (req,res){
    //get leboncoin url from the user input
    var lbcURL = req.body.search;
    console.log(lbcURL)

    leboncoin.lbcScrape(lbcURL);

    if(leboncoin.lbcScrapeRubric == "Ventes immobilères"){
        if(leboncoin.lbcScrapeType == "Appartement"){
            meilleursagents.maScrapeAppart(maURL);
            if(leboncoin.lbcScrapeRent(lbcURL) < meilleursagents.appart.ma_PriceLow){
                document.getElementById(in-love).style.display = "inline";
            }
            else if(leboncoin.lbcScrapeRent(lbcURL) > meilleursagents.appart.ma_PriceLow && leboncoin.lbcScrapeRent(lbcURL) < meilleursagents.appart.ma_PriceMedium){
                document.getElementById(smiling).style.display = "inline";
            }
            else if(leboncoin.lbcScrapeRent(lbcURL) > meilleursagents.appart.ma_PriceMedium && leboncoin.lbcScrapeRent(lbcURL) < meilleursagents.appart.ma_PriceHigh){
                document.getElementById(confused).style.display = "inline";
            }
            else if(leboncoin.lbcScrapeRent(lbcURL) > meilleursagents.appart.ma_PriceHigh){
                document.getElementById(sad).style.display = "inline";
            }
        }
        else if(leboncoin.lbcScrapeType == "Maison"){
            meilleursagents.maScrapeHouse(maURL);
            if(leboncoin.lbcScrapeRent(lbcURL) < meilleursagents.house.ma_PriceLow){
                document.getElementById(in-love).style.display = "inline";
            }
            else if(leboncoin.lbcScrapeRent(lbcURL) > meilleursagents.house.ma_PriceLow && leboncoin.lbcScrapeRent(lbcURL) < meilleursagents.house.ma_PriceMedium){
                document.getElementById(smiling).style.display = "inline";
            }
            else if(leboncoin.lbcScrapeRent(lbcURL) > meilleursagents.house.ma_PriceMedium && leboncoin.lbcScrapeRent(lbcURL) < meilleursagents.house.ma_PriceHigh){
                document.getElementById(confused).style.display = "inline";
            }
            else if(leboncoin.lbcScrapeRent(lbcURL) > meilleursagents.house.ma_PriceHigh){
                document.getElementById(sad).style.display = "inline";
            }
        }
    }

    else if(leboncoin.lbcScrapeRubric == "Locations"){
        meilleursagents.maScrapeRent(maURL);
        if(leboncoin.lbcScrapeRent(lbcURL) < meilleursagents.rent.ma_PriceLow){
            document.getElementById(in-love).style.display = "inline";
        }
        else if(leboncoin.lbcScrapeRent(lbcURL) > meilleursagents.rent.ma_PriceLow && leboncoin.lbcScrapeRent(lbcURL) < meilleursagents.rent.ma_PriceMedium){
            document.getElementById(smiling).style.display = "inline";
        }
        else if(leboncoin.lbcScrapeRent(lbcURL) > meilleursagents.rent.ma_PriceMedium && leboncoin.lbcScrapeRent(lbcURL) < meilleursagents.rent.ma_PriceHigh){
            document.getElementById(confused).style.display = "inline";
        }
        else if(leboncoin.lbcScrapeRent(lbcURL) > meilleursagents.rent.ma_PriceHigh){
            document.getElementById(sad).style.display = "inline";
        }
}
});


//run the server
app.listen(port);
//exports = module.exports = app;


/*app.post('/', function(req, res){

})*/