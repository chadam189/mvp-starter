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
  id: {type: Number, unique: true}, // id
  beerId: Number,
  // fullname: String,
  name: String, // name
  ibuAvg: Number, // (ibuMin + ibuMax) / 2
  abvAvg: Number, // (abvMin + abvMax) / 2
  srmAvg: Number,
  categoryId: Number, // category.id
  categoryName: String, // category.name
  description: String  // description
});

var Beer = mongoose.model('Beer', beerSchema);

var Style = mongoose.model('Style', styleSchema);

// var selectAll = function(model, callback) {
//   model.find({}, function(err, beers) {
//     if(err) {
//       callback(err, null);
//     } else {
//       callback(null, beers);
//     }
//   });
// };

var saveAllStyles = function(styles) {
  console.log('saveAllStyles is being called with', styles.length);

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
    let srmAvg = (abv1 + abv2) * .5;

    if (!ibuAvg || !abvAvg || !srmAvg ) {
      continue;
    }


    let obj = {
      id: styles[i].id,
      beerId: id++,
      name: styles[i].name,
      ibuAvg: ibuAvg,
      abvAvg: abvAvg,
      srmAvg: srmAvg,
      categoryId: styles[i].category.id, 
      categoryName: styles[i].category.name,
      description: styles[i].description
    };

    let newStyle = new Style(obj);
    results.push(obj);

    newStyle.save({});
  }
  return (results);
}




//     }
//   });
// };

// module.exports.selectAll = selectAll;
module.exports.saveAllStyles = saveAllStyles;
