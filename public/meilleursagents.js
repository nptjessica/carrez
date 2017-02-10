//Step 5 - require('meilleursagents')
//remove extra space
function trimSpaces(string){
	return string.replace(/(\s+)/gm,"");
}
//https://www.youtube.com/watch?v=Wo5eMclb-G4&index=1&list=PLGquJ_T_JBMSfMO7yPR7kkZCJc8xQg0Gf
//maURL: url address of the site we want to scrape
var maScrape = function (maURL){
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

        var maAppartMedium = $('#synthese > div.prices-summary.baseline > div.prices-summary__values > div:nth-child(2) > div.small-4.medium-2.columns.prices-summary__cell--median');
        var maAppartMediumText = trimSpaces(maAppartMedium.text());

        var maAppartHigh = $('#synthese > div > div.prices-summary__values > div:nth-child(2) > div:nth-child(4)');
        var maAppartHighText = trimSpaces(maAppartHigh.text());

        var maHouseLow = $('#synthese > div > div.prices-summary__values > div:nth-child(3) > div.small-4.medium-2.medium-offset-0.columns.prices-summary__cell--muted');
        var maHouseLowText = trimSpaces(maHouseLow.text());

        var maHouseMedium = $('#synthese > div > div.prices-summary__values > div:nth-child(3) > div.small-4.medium-2.columns.prices-summary__cell--median');
        var maHouseMediumText = trimSpaces(maHouseMedium.text());

        var maHouseHigh = $('#synthese > div > div.prices-summary__values > div:nth-child(3) > div:nth-child(4)');
        var maHouseHighText = trimSpaces(maHouseHigh.text());

        var maRentLow = $('#synthese > div > div.prices-summary__values > div.row.medium-uncollapse.baseline > div.small-4.medium-2.medium-offset-0.columns.prices-summary__cell--muted');
        var maRentLowText = trimSpaces(maRentLow.text());

        var maRentMedium = $('#synthese > div > div.prices-summary__values > div.row.medium-uncollapse.baseline > div.small-4.medium-2.columns.prices-summary__cell--median');
        var maRentMediumText = trimSpaces(maRentMedium.text());

        var maRentHigh = $('#synthese > div > div.prices-summary__values > div.row.medium-uncollapse.baseline > div:nth-child(4)');
        var maRentHighText = trimSpaces(maRentHigh.text());
        return console.log("MA succès");
    })
}

module.exports = maScrape;
