var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/beerfetcher');

var db = mongoose.connection;

db.on('error', function() {
  console.log('mongoose connection error');
});

db.once('open', function() {
  console.log('You are connected to the mongoose DB!');
});

var beerSchema = mongoose.Schema({
  quantity: Number,
  description: String
});

var Beer = mongoose.model('Beer', beerSchema);

var selectAll = function(callback) {
  Item.find({}, function(err, items) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, items);
    }
  });
};

module.exports.selectAll = selectAll;