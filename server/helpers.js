var rp = require('request-promise');
var config = require('../config/config.js');

var searchBeerAPI = function (term = 'styles', field) {

  return new Promise(function(resolve, reject) {

    console.log('inside searchBeerAPI with args: ', term, field);

    var options = {
      uri: `http://api.brewerydb.com/v2/styles?key=${config.API_KEY}`,
      // qs: {
      //     key: `${config.API_KEY}`, 
      //     // -> uri + '?key=xxxxxxxxx'
      //     format: 'json'
      // },
      headers: {
          // 'User-Agent': 'Request-Promise'
      },
      json: true // Automatically parses the JSON string in the response
    };

    console.log('uri = ', options.uri);

    rp(options)
      .then((results) => {
        console.log('the API call worked: ', results.data.length);
        resolve(results);
      });

    

  });

}




module.exports.searchBeerAPI = searchBeerAPI;

// SENDING ENDPOINT ARGUMENTS:

// When sending data to BreweryDB, either for filtering on listing endpoints or for submitting new data, you should pass all your data using application/x-www-form-urlencoded strings. For GET methods, these are passed via the query string (after the "?" in the request URL). For POST and PUT methods, these should be passed in the POST body.
