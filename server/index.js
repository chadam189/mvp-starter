var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var database = require('../database-mongo');
var helpers = require('./helpers.js');
var CORS = require('cors');
var d3 = require("d3");


var app = express();


app.use(express.static(__dirname + '/../react-client/dist'));
app.use(morgan('dev'));
app.use(CORS());

app.get('/items', function (req, res) {

  Promise.resolve(helpers.searchBeerAPI(null, null))

  .then((results) => {
  	console.log('results from SBAPI = ', results.data.length);
  	return Promise.resolve(database.saveAllStyles(results.data))
  })
  .then((results) => {
  	console.log('in final promise chain: ', results.length);
	  res.json(results);
  })


});

app.listen(3000, function() {
  console.log('listening on port 3000!');
});

