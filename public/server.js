//gitignore node_modules permet d'ignorer et de ne pas installer les dépendances

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

//on the browser, in the tool bar, write: localhost:8084 and enter


//https://scotch.io/tutorials/scraping-the-web-with-node-js
var express = require('express');
//var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var app = express();

//var leboncoin = require('leboncoin');
//var meilleursagents = require('meilleursagents');

app.get('/scrape', function(req,res){
    //the URL we will scrape from
    url = 'https://www.leboncoin.fr/ventes_immobilieres/1076257949.htm?ca=12_s';

    //the structure of our request call
    //the first parameter is our url
    //the callback function takes 3 parameters, an error, response status code and the html
    request(url, function(error, response, html){
        //we check to make sure no errors occured when making ht request
        if(!error){
            //we use the cheerio library on the returned html which will essentially give us jQuery functionnalities
            var $ = cheerio.load(html);

            //we define the variables we're going to capture
            var lbcTitle, lbcUrl, lbcPrice;
            var json = {title:"", lbcUrl:"", lbcPrice:""};

            //we use the unique header class as a starting point
             $('.header').filter(function(){
                //we store the data we filter into a variable so we can see what's going on
                var data = $(this);

                //in examining the DOM we notice that the title rests the first child element of the head
                //using jQuery we can navigate and get the text
                title = data.children().first.text();

                //once we have our title, we store it to our json object
                json.title = title;
             })
        }
    })
})

app.listen('8081')
console.log('Magic happens on port 8081');
exports = module.exports = app;