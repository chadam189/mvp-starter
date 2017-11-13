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

var styleSchema = mongoose.Schema({
  id: {type: Number, unique: true},
  beerId: Number,
  fullname: String,
  nickname: String, 
  ibuAvg: Number, 
  abvAvg: Number, 
  srmAvg: Number,
  categoryId: Number, 
  categoryName: String,
  description: String,  
  zscore: Number,
  prefRating: Number
});

var Beer = mongoose.model('Beer', beerSchema);

var Style = mongoose.model('Style', styleSchema);

var saveAllStyles = function(styles) {

  var results = [];

  var id = 1;

  for(var i = 0; i < styles.length; i++) {

    let ibu1 = parseInt(styles[i].ibuMin);
    let ibu2 = parseInt(styles[i].ibuMax);
    let abv1 = parseInt(styles[i].abvMin);
    let abv2 = parseInt(styles[i].abvMax);
    let srm1 = parseInt(styles[i].srmMin);
    let srm2 = parseInt(styles[i].srmMax);


    let ibuAvg = (ibu1 + ibu2) * .5;
    let abvAvg = (abv1 + abv2) * .5;
    let srmAvg = (srm1 + srm2) * .5;

    if (!ibuAvg || !abvAvg || !srmAvg ) {
      continue;
    }

    let beerName = styles[i].name;

    beerName = beerName.substring(0, beerName.indexOf('or'));
    beerName = beerName.substring(0, beerName.indexOf('/'));
    beerName = beerName.substring(0, beerName.indexOf('('));

    let obj = {
      id: styles[i].id,
      beerId: id++,
      fullname: styles[i].name,
      nickname: beerName,
      ibuAvg: ibuAvg,
      abvAvg: abvAvg,
      srmAvg: srmAvg,
      categoryId: styles[i].category.id, 
      categoryName: styles[i].category.name,
      description: styles[i].description,
      zscore: 0,
      prefRating: 0
    };

    let newStyle = new Style(obj);
    results.push(obj);

    newStyle.save({});
  }
  return (results);
}

module.exports.saveAllStyles = saveAllStyles;
