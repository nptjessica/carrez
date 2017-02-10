//Step 4 - require('leboncoin')
//https://www.youtube.com/watch?v=Wo5eMclb-G4&index=1&list=PLGquJ_T_JBMSfMO7yPR7kkZCJc8xQg0Gf
//url address of the site we want to scrape
function trimSpaces(string){
	return string.replace(/ (\s+)|(\n)|(\t)/gm,"");
}

function trimCC(string){
    return string.replace("€","");

}

var lbcScrape = function(lbcURL){
    var request = require('request');
    var cheerio = require('cheerio');
    request(lbcURL, function(err, resp, body){
        //err to display if there is an error or not
        // respo to check for a certain status code: 200 or 404
        //body to print out or download what we want at the request url

        //grab elements off the page
        var $ = cheerio.load(body);

        var lbcTitle = $('#adview > section > header > h1');
        var lbcTitleText = trimSpaces(lbcTitle.text());

        var lbcRent = $('#adview > section > section > section.properties.lineNegative > div:nth-child(5) > h2 > span.value');
        var lbcRentText = trimSpaces(lbcRent.text());
        lbcRentText = trimCC(lbcRentText);

        var lbcTown = $('#adview > section > section > section.properties.lineNegative > div.line.line_city > h2 > span.value');
        var lbcTownText = trimSpaces(lbcTown.text());

        var lbcType = $('#adview > section > section > section.properties.lineNegative > div:nth-child(7) > h2 > span.value');
        var lbcTypeText = trimSpaces(lbcType.text());

        var lbcRooms = $('#adview > section > section > section.properties.lineNegative > div:nth-child(8) > h2 > span.value');
        var lbcRoomsText = trimSpaces(lbcRooms.text());

        var lbcFurnished = $('#adview > section > section > section.properties.lineNegative > div:nth-child(9) > h2 > span.value');
        var lbcFurnishedText = trimSpaces(lbcFurnished.text());

        var lbcSurface = $('#adview > section > section > section.properties.lineNegative > div:nth-child(10) > h2 > span.value');
        var lbcSurfaceText = trimSpaces(lbcSurface.text());

        var lbcGES = $('#adview > section > section > section.properties.lineNegative > div:nth-child(11) > h2 > span.value');
        var lbcGESText = trimSpaces(lbcGES.text());

        var lbcEnergy = $('#adview > section > section > section.properties.lineNegative > div:nth-child(12) > h2 > span.value');
        var lbcEnergyText = trimSpaces(lbcEnergy.text());

        var lbcDescription = $('#adview > section > section > section.properties.lineNegative > div.line.properties_description > p.value');
        var lbcDescriptionText = trimSpaces(lbcDescription.text());

        //var lbcData = [];
        console.log(lbcRentText);
        console.log("lbc succès");
    })
}

module.exports = lbcScrape;