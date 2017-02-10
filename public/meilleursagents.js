//Step 5 - require('meilleursagents')
//remove extra space
function trimSpaces(string){
	return string.replace(/(\s+)/gm,"");
}
//https://www.youtube.com/watch?v=Wo5eMclb-G4&index=1&list=PLGquJ_T_JBMSfMO7yPR7kkZCJc8xQg0Gf
//url address of the site we want to scrape

var maURL = "https://www.meilleursagents.com/prix-immobilier/le-bourget-93350/"
request(maURL, function(err, resp, body){
    //err to display if there is an error or not
    // respo to check for a certain status code: 200 or 404
    //body to print out or download what we want at the request url

    //grab elements off the page
    var $ = cheerio.load(body);

     //Step 2 - Estimation from Meilleurs agents
    var maJSON = {
      "ma_Price":""
    }

    var maAppartLow = $('#synthese > div.prices-summary.baseline > div.prices-summary__values > div:nth-child(2) > div.small-4.medium-2.medium-offset-0.columns.prices-summary__cell--muted');
    var maAppartLowText = maAppartLow.text();
    console.log(trimSpaces(maAppartLowText));

    var maAppartMedium = $('#synthese > div.prices-summary.baseline > div.prices-summary__values > div:nth-child(2) > div.small-4.medium-2.columns.prices-summary__cell--median');
    var maAppartMediumText = maAppartMedium.text();
    console.log(trimSpaces(maAppartMediumText));

    var maAppartHigh = $('#synthese > div > div.prices-summary__values > div:nth-child(2) > div:nth-child(4)');
    var maAppartHighText = maAppartHigh.text();
    console.log(trimSpaces(maAppartHighText));

    var maHouseLow = $('#synthese > div > div.prices-summary__values > div:nth-child(3) > div.small-4.medium-2.medium-offset-0.columns.prices-summary__cell--muted');
    var maHouseLowText = maHouseLow.text();
    console.log(trimSpaces(maHouseLowText));

    var maHouseMedium = $('#synthese > div > div.prices-summary__values > div:nth-child(3) > div.small-4.medium-2.columns.prices-summary__cell--median');
    var maHouseMediumText = maHouseMedium.text();
    console.log(trimSpaces(maHouseMediumText));

    var maHouseHigh = $('#synthese > div > div.prices-summary__values > div:nth-child(3) > div:nth-child(4)');
    var maHouseHighText = maHouseHigh.text();
    console.log(trimSpaces(maHouseHighText));

    var maRentLow = $('#synthese > div > div.prices-summary__values > div.row.medium-uncollapse.baseline > div.small-4.medium-2.medium-offset-0.columns.prices-summary__cell--muted');
    var maRentLowText = maRentLow.text();
    console.log(trimSpaces(maRentLowText));

    var maRentMedium = $('#synthese > div > div.prices-summary__values > div.row.medium-uncollapse.baseline > div.small-4.medium-2.columns.prices-summary__cell--median');
    var maRentMediumText = maRentMedium.text();
    console.log(trimSpaces(maRentMediumText));

    var maRentHigh = $('#synthese > div > div.prices-summary__values > div.row.medium-uncollapse.baseline > div:nth-child(4)');
    var maRentHighText = maRentHigh.text();
    console.log(trimSpaces(maRentHighText));
})
