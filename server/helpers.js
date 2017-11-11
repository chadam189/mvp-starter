var rp = require('request-promise');
var config = require('../config/config.js');

var searchBeerAPI = function (field, params) {

  return new Promise(function(resolve, reject) {

  	field = field || 'styles';

    console.log('inside searchBeerAPI with args: ', field, params);

    console.log('searching with this url: ', `http://api.brewerydb.com/v2/${field}?`);

    var options = {
      uri: `http://api.brewerydb.com/v2/${field}?`,
      qs: {
          key: `${config.API_KEY}`, 
          // -> uri + '?key=xxxxxxxxx'
      },
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
