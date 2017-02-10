//Step 4 - require('leboncoin')
//https://www.youtube.com/watch?v=Wo5eMclb-G4&index=1&list=PLGquJ_T_JBMSfMO7yPR7kkZCJc8xQg0Gf
//url address of the site we want to scrape
function trimSpaces(string){
	return string.replace(/ (\s+)|(\n)|(\t)/gm,"");
}

var lbcURL = "https://www.leboncoin.fr/locations/1078290739.htm?ca=12_s"
request(lbcURL, function(err, resp, body){
    //err to display if there is an error or not
    // respo to check for a certain status code: 200 or 404
    //body to print out or download what we want at the request url

    //grab elements off the page
    var $ = cheerio.load(body);

    //Step 1 - Classified ad real estate definition
    var lbcJSON = {
      "lbc_title":"",
      "lbc_price":"",
      "lbc_town":"",
      "lbc_type":"",
      "lbc_rooms":"",
      "lbc_furnished":"",
      "lbc_area":"",
      "lbc_ges":"",
      "lbc_energy":"",
      "lbc_description":""
    }

    var lbcTitle = $('#adview > section > header > h1');
    var lbcTitleText = lbcTitle.text();
    lbcJSON.lbc_title = trimSpaces(lbcTitleText);

    var lbcRent = $('#adview > section > section > section.properties.lineNegative > div:nth-child(5) > h2 > span.value');
    var lbcRentText = lbcRent.text();
    lbcJSON.lbc_price = trimSpaces(lbcRentText);

    var lbcTown = $('#adview > section > section > section.properties.lineNegative > div.line.line_city > h2 > span.value');
    var lbcTownText = lbcTown.text();
    lbcJSON.lbc_town = trimSpaces(lbcTownText);

    var lbcType = $('#adview > section > section > section.properties.lineNegative > div:nth-child(7) > h2 > span.value');
    var lbcTypeText = lbcType.text();
    lbcJSON.lbc_type = lbcTypeText;

    var lbcRooms = $('#adview > section > section > section.properties.lineNegative > div:nth-child(8) > h2 > span.value');
    var lbcRoomsText = lbcRooms.text();
    lbcJSON.lbc_rooms = lbcRoomsText;

    var lbcFurnished = $('#adview > section > section > section.properties.lineNegative > div:nth-child(9) > h2 > span.value');
    var lbcFurnishedText = lbcFurnished.text();
    lbcJSON.lbc_furnished = lbcFurnishedText;

    var lbcSurface = $('#adview > section > section > section.properties.lineNegative > div:nth-child(10) > h2 > span.value');
    var lbcSurfaceText = lbcSurface.text();
    lbcJSON.lbc_area = lbcSurfaceText;

    var lbcGES = $('#adview > section > section > section.properties.lineNegative > div:nth-child(11) > h2 > span.value');
    var lbcGESText = lbcGES.text();
    lbcJSON.lbc_ges = trimSpaces(lbcGESText);

    var lbcEnergy = $('#adview > section > section > section.properties.lineNegative > div:nth-child(12) > h2 > span.value');
    var lbcEnergyText = lbcEnergy.text();
    lbcJSON.lbc_energy = trimSpaces(lbcEnergyText);

    var lbcDescription = $('#adview > section > section > section.properties.lineNegative > div.line.properties_description > p.value');
    var lbcDescriptionText = lbcDescription.text();
    lbcJSON.lbc_description = lbcDescriptionText;
    console.log(lbcJSON);
})
