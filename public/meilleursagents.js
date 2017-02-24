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
    request(maURL, function(err, resp, body){
        //err to display if there is an error or not
        // respo to check for a certain status code: 200 or 404
        //body to print out or download what we want at the request url

        //grab elements off the page
        var $ = cheerio.load(body);

        var maAppartLow = $('#synthese > div.prices-summary.baseline > div.prices-summary__values > div:nth-child(2) > div.small-4.medium-2.medium-offset-0.columns.prices-summary__cell--muted');
        var maAppartLowText = trimSpaces(maAppartLow.text());
        maAppartLowText = trimEuro(maAppartLowText);

        var maAppartMedium = $('#synthese > div.prices-summary.baseline > div.prices-summary__values > div:nth-child(2) > div.small-4.medium-2.columns.prices-summary__cell--median');
        var maAppartMediumText = trimSpaces(maAppartMedium.text());
        maAppartMediumText = trimEuro(maAppartMediumText);

        var maAppartHigh = $('#synthese > div > div.prices-summary__values > div:nth-child(2) > div:nth-child(4)');
        var maAppartHighText = trimSpaces(maAppartHigh.text());
        maAppartHighText = trimEuro(maAppartHighText);

        return console.log(maAppartLowText)+
        console.log(maAppartMediumText)+
        console.log(maAppartHighText);
    })
}

var maScrapeHouse = function (maURL){
    var request = require('request');
    var cheerio = require('cheerio');
    request(maURL, function(err, resp, body){
        var $ = cheerio.load(body);

        var maHouseLow = $('#synthese > div > div.prices-summary__values > div:nth-child(3) > div.small-4.medium-2.medium-offset-0.columns.prices-summary__cell--muted');
        var maHouseLowText = trimSpaces(maHouseLow.text());
        maHouseLowText = trimEuro(maHouseLowText);

        var maHouseMedium = $('#synthese > div > div.prices-summary__values > div:nth-child(3) > div.small-4.medium-2.columns.prices-summary__cell--median');
        var maHouseMediumText = trimSpaces(maHouseMedium.text());
        maHouseMediumText = trimEuro(maHouseMediumText);

        var maHouseHigh = $('#synthese > div > div.prices-summary__values > div:nth-child(3) > div:nth-child(4)');
        var maHouseHighText = trimSpaces(maHouseHigh.text());
        maHouseHighText = trimEuro(maHouseHighText);

        return console.log(maHouseLowText)+
        console.log(maHouseMediumText)+
        console.log(maHouseHighText);
    })
}

var maScrapeRent = function (maURL){
    var request = require('request');
    var cheerio = require('cheerio');
    request(maURL, function(err, resp, body){
        var $ = cheerio.load(body);

        var maRentLow = $('#synthese > div > div.prices-summary__values > div.row.medium-uncollapse.baseline > div.small-4.medium-2.medium-offset-0.columns.prices-summary__cell--muted');
        var maRentLowText = trimSpaces(maRentLow.text());
        maRentLowText = trimEuro(maRentLowText);

        var maRentMedium = $('#synthese > div > div.prices-summary__values > div.row.medium-uncollapse.baseline > div.small-4.medium-2.columns.prices-summary__cell--median');
        var maRentMediumText = trimSpaces(maRentMedium.text());
        maRentMediumText = trimEuro(maRentMediumText);

        var maRentHigh = $('#synthese > div > div.prices-summary__values > div.row.medium-uncollapse.baseline > div:nth-child(4)');
        var maRentHighText = trimSpaces(maRentHigh.text());
        maRentHighText = trimEuro(maRentHighText);

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
