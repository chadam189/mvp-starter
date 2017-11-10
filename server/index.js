var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var items = require('../database-mongo');
var helper = require('./helpers.js');
var CORS = require('cors');

var app = express();


app.use(express.static(__dirname + '/../react-client/dist'));
app.use(morgan('dev'));
app.use(CORS());

app.get('/items', function (req, res) {
  let temp = [{description: 'sup ladies'}];
  res.json(temp);

  // items.selectAll(function(err, data) {
  //   if(err) {
  //     res.sendStatus(500);
  //   } else {
  //   	let temp = ['beersTestStuff'];
  //     res.json(temp);
  //   }
  // });
});

app.listen(3000, function() {
  console.log('listening on port 3000!');
});

