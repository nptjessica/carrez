//Step 5 - require('meilleursagents')
//create module: https://www.youtube.com/watch?v=xHLd36QoS4k / https://www.youtube.com/watch?v=9UaZtgB5tQI

//remove extra spaces
function trimSpaces(string){
	return string.replace(/(\s+)/gm,"");
}

//replace € by space
function trimEuro(string){
    return string.replace("€","");
}

//maURL: url address of the site we want to scrape
var maScrapeAppart = function (maURL){
    var request = require('request');
    var cheerio = require('cheerio');
    var fs = require('fs');
    request(maURL, function(err, resp, body){
        //err to display if there is an error or not
        // respo to check for a certain status code: 200 or 404
        //body to print out or download what we want at the request url

        //grab elements off the page
        var $ = cheerio.load(body);

        //read meilleursagents.json file
        var fsMa = fs.readFileSync("meilleursagents.json");
        var maJSON = JSON.parse(fsMa);

        var maAppartLow = $('#synthese > div.prices-summary.baseline > div.prices-summary__values > div:nth-child(2) > div.small-4.medium-2.medium-offset-0.columns.prices-summary__cell--muted');
        var maAppartLowText = trimSpaces(maAppartLow.text());
        maAppartLowText = trimEuro(maAppartLowText);
        maAppartLowText = parseInt(maAppartLowText);
        maJSON.appart.ma_PriceLow = maAppartLowText;

        var maAppartMedium = $('#synthese > div.prices-summary.baseline > div.prices-summary__values > div:nth-child(2) > div.small-4.medium-2.columns.prices-summary__cell--median');
        var maAppartMediumText = trimSpaces(maAppartMedium.text());
        maAppartMediumText = trimEuro(maAppartMediumText);
        maAppartMediumText = parseInt(maAppartMediumText);
        maJSON.appart.ma_PriceMedium = maAppartMediumText;

        var maAppartHigh = $('#synthese > div > div.prices-summary__values > div:nth-child(2) > div:nth-child(4)');
        var maAppartHighText = trimSpaces(maAppartHigh.text());
        maAppartHighText = trimEuro(maAppartHighText);
        maAppartHighText = parseInt(maAppartHighText);
        maJSON.appart.ma_PriceHigh = maAppartHighText;

        return console.log(maAppartLowText)+
        console.log(maAppartMediumText)+
        console.log(maAppartHighText)+
        console.log(maJSON);
    })
}

var maScrapeHouse = function (maURL){
    var request = require('request');
    var cheerio = require('cheerio');
    var fs = require('fs');
    request(maURL, function(err, resp, body){
        var $ = cheerio.load(body);

        var fsMa = fs.readFileSync("meilleursagents.json");
        var maJSON = JSON.parse(fsMa);

        var maHouseLow = $('#synthese > div > div.prices-summary__values > div:nth-child(3) > div.small-4.medium-2.medium-offset-0.columns.prices-summary__cell--muted');
        var maHouseLowText = trimSpaces(maHouseLow.text());
        maHouseLowText = trimEuro(maHouseLowText);
        maHouseLowText = parseInt(maHouseLowText);
        maJSON.house.ma_PriceLow = maHouseLowText;

        var maHouseMedium = $('#synthese > div > div.prices-summary__values > div:nth-child(3) > div.small-4.medium-2.columns.prices-summary__cell--median');
        var maHouseMediumText = trimSpaces(maHouseMedium.text());
        maHouseMediumText = trimEuro(maHouseMediumText);
        maHouseMediumText = parseInt(maHouseMediumText);
        maJSON.house.ma_PriceMedium = maHouseMediumText;

        var maHouseHigh = $('#synthese > div > div.prices-summary__values > div:nth-child(3) > div:nth-child(4)');
        var maHouseHighText = trimSpaces(maHouseHigh.text());
        maHouseHighText = trimEuro(maHouseHighText);
        maHouseHighText = parseInt(maHouseHighText);
        maJSON.house.ma_PriceHigh = maHouseHighText;

        return console.log(maHouseLowText)+
        console.log(maHouseMediumText)+
        console.log(maHouseHighText);
    })
}

var maScrapeRent = function (maURL){
    var request = require('request');
    var cheerio = require('cheerio');
    var fs = require('fs');
    request(maURL, function(err, resp, body){
        var $ = cheerio.load(body);

        var fsMa = fs.readFileSync("meilleursagents.json");
        var maJSON = JSON.parse(fsMa);

        var maRentLow = $('#synthese > div > div.prices-summary__values > div.row.medium-uncollapse.baseline > div.small-4.medium-2.medium-offset-0.columns.prices-summary__cell--muted');
        var maRentLowText = trimSpaces(maRentLow.text());
        maRentLowText = trimEuro(maRentLowText);
        maRentLowText = parseInt(maRentLowText);
        maJSON.rent.ma_PriceLow = maRentLowText;

        var maRentMedium = $('#synthese > div > div.prices-summary__values > div.row.medium-uncollapse.baseline > div.small-4.medium-2.columns.prices-summary__cell--median');
        var maRentMediumText = trimSpaces(maRentMedium.text());
        maRentMediumText = trimEuro(maRentMediumText);
        maRentMediumText = parseInt(maRentMediumText);
        maJSON.rent.ma_PriceMedium = maRentMediumText;

        var maRentHigh = $('#synthese > div > div.prices-summary__values > div.row.medium-uncollapse.baseline > div:nth-child(4)');
        var maRentHighText = trimSpaces(maRentHigh.text());
        maRentHighText = trimEuro(maRentHighText);
        maRentHighText = parseInt(maRentHighText);
        maJSON.rent.ma_PriceHigh = maRentHighText;

        return console.log(maRentLowText)+
        console.log(maRentMediumText)+
        console.log(maRentHighText);
    })
}

//enable the function "lbcScrape" to be available to other files/outside of the module
//other method from leboncoin.js
module.exports = {
    maScrapeAppart:maScrapeAppart,
    maScrapeHouse:maScrapeHouse,
    maScrapeRent:maScrapeRent
};
