//Step 4 - require('leboncoin')
//create module: https://www.youtube.com/watch?v=xHLd36QoS4k / https://www.youtube.com/watch?v=9UaZtgB5tQI

//remove simple space
function trimSpace (string){
    return string.replace(/ /gm,"");
}

//remove extra spaces
function trimSpaces(string){
	return string.replace(/ (\s+)|(\n)|(\t)/gm,"");
}

//replace € by space
function trimEuro(string){
    return string.replace("€","");
}

//for town, replace simple space by -
function dash(string){
    return string.replace(/ /gm,"-");
}

//for town, replace é, è, ê by e
function replaceE(string){
    return string.replace(/é | è | ê/g,"e");
}

//replace ç by c
//replace â by a
//replace î by i
//replace ô by o
//replace ÿ by y
//replace œ by oe


//lbcURL: url address of the site we want to scrape
var lbcScrape = function(lbcURL){
    var request = require('request');
    var cheerio = require('cheerio');
    var fs = require('fs');
    request(lbcURL, function(err, resp, body){
        //err to display if there is an error or not
        // respo to check for a certain status code: 200 or 404
        //body to print out or download what we want at the request url

        //grab elements off the page
        var $ = cheerio.load(body);

        //read leboncoin.json file
        var fsLbc = fs.readFileSync("leboncoin.json");
        var lbcJSON = JSON.parse(fsLbc);

        var lbcRubric = $('#main > section > nav > ul > li:nth-child(3) > a');
        var lbcRubricText = lbcRubric.text();
        lbcJSON.leboncoin.lbc_rubric = lbcRentText;

        var lbcTitle = $('#adview > section > header > h1');
        var lbcTitleText = trimSpaces(lbcTitle.text());
        lbcJSON.leboncoin.lbc_title = lbcTitleText;

        var lbcRent = $('#adview > section > section > section.properties.lineNegative > div:nth-child(5) > h2 > span.value');
        var lbcRentText = trimSpaces(lbcRent.text());
        lbcRentText = trimEuro(lbcRentText);
        lbcRentText = parseInt(lbcRentText);
        lbcJSON.leboncoin.lbc_price = lbcRentText;

        var lbcTown = $('#adview > section > section > section.properties.lineNegative > div.line.line_city > h2 > span.value');
        var lbcTownText = trimSpaces(lbcTown.text());
        lbcJSON.leboncoin.lbc_town = lbcTownText;

        var lbcType = $('#adview > section > section > section.properties.lineNegative > div:nth-child(7) > h2 > span.value');
        var lbcTypeText = trimSpaces(lbcType.text());
        lbcJSON.leboncoin.lbc_type = lbcTypeText;

        var lbcRooms = $('#adview > section > section > section.properties.lineNegative > div:nth-child(8) > h2 > span.value');
        var lbcRoomsText = trimSpaces(lbcRooms.text());
        lbcRoomstText = parseInt(lbcRoomsText);
        lbcJSON.leboncoin.lbc_rooms = lbcRoomsText;

        var lbcFurnished = $('#adview > section > section > section.properties.lineNegative > div:nth-child(9) > h2 > span.value');
        var lbcFurnishedText = trimSpaces(lbcFurnished.text());
        lbcJSON.leboncoin.lbc_furnished = lbcFurnishedText;

        var lbcSurface = $('#adview > section > section > section.properties.lineNegative > div:nth-child(10) > h2 > span.value');
        var lbcSurfaceText = trimSpaces(lbcSurface.text());
        lbcSurfaceText = parseInt(lbcSurfaceText);
        lbcJSON.leboncoin.lbc_area = lbcSurfaceText;

        var lbcGES = $('#adview > section > section > section.properties.lineNegative > div:nth-child(11) > h2 > span.value');
        var lbcGESText = trimSpaces(lbcGES.text());
        lbcJSON.leboncoin.lbc_ges = lbcGESText;

        var lbcEnergy = $('#adview > section > section > section.properties.lineNegative > div:nth-child(12) > h2 > span.value');
        var lbcEnergyText = trimSpaces(lbcEnergy.text());
        lbcJSON.leboncoin.lbc_energy = lbcEnergyText;

        var lbcDescription = $('#adview > section > section > section.properties.lineNegative > div.line.properties_description > p.value');
        var lbcDescriptionText = trimSpaces(lbcDescription.text());
        lbcJSON.leboncoin.lbc_description = lbcDescriptionText;

        //display scraped data
        return console.log(lbcRubricText)+
        console.log(lbcTitleText)+
        console.log(lbcRentText)+
        console.log(lbcTownText)+
        console.log(lbcTypeText)+
        console.log(lbcRoomsText)+
        console.log(lbcFurnishedText)+
        console.log(lbcSurfaceText)+
        console.log(lbcGESText)+
        console.log(lbcEnergyText)+
        console.log(lbcDescriptionText);
    })
}

var lbcScrapeRubric = function(lbcURL){
    var request = require('request');
    var cheerio = require('cheerio');
    request(lbcURL, function(err, resp, body){
        var $ = cheerio.load(body);

        var lbcRubric = $('#main > section > nav > ul > li:nth-child(3) > a');
        var lbcRubricText = lbcRubric.text();
        return console.log(lbcRubricText);
    })
}

var lbcScrapeRent = function(lbcURL){
    var request = require('request');
    var cheerio = require('cheerio');
    request(lbcURL, function(err, resp, body){
        var $ = cheerio.load(body);

        var lbcRent = $('#adview > section > section > section.properties.lineNegative > div:nth-child(5) > h2 > span.value');
        var lbcRentText = trimSpace(lbcRent.text());
        lbcRentText = trimSpaces(lbcRentText);
        lbcRentText = trimEuro(lbcRentText);
        return console.log(lbcRentText);
    })
}

var lbcScrapeTown = function(lbcURL){
    var request = require('request');
    var cheerio = require('cheerio');
    request(lbcURL, function(err, resp, body){
        var $ = cheerio.load(body);

        var lbcTown = $('#adview > section > section > section.properties.lineNegative > div.line.line_city > h2 > span.value');
        var lbcTownText = trimSpaces(lbcTown.text());
        lbcTownText = dash(lbcTownText);
        lbcTownText = replaceE(lbcTownText);
        lbcTownText = lbcTownText.toLowerCase();

        return console.log(lbcTownText);
    })
}

var lbcScrapeType = function(lbcURL){
    var request = require('request');
    var cheerio = require('cheerio');
    request(lbcURL, function(err, resp, body){
        var $ = cheerio.load(body);

        var lbcType = $('#adview > section > section > section.properties.lineNegative > div:nth-child(7) > h2 > span.value');
        var lbcTypeText = trimSpaces(lbcType.text());

        return console.log(lbcTypeText);
    })
}



//enable the function "lbcScrape" to be available to other files/outside of the module
module.exports.lbcScrape = lbcScrape;
module.exports.lbcScrapeRubric = lbcScrapeRubric;
module.exports.lbcScrapeRent = lbcScrapeRent;
module.exports.lbcScrapeTown = lbcScrapeTown;
module.exports.lbcScrapeType = lbcScrapeType;