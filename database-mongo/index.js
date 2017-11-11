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
  // fullname: String,
  name: String, // name
  ibuAvg: Number, // (ibuMin + ibuMax) / 2
  abvAvg: Number, // (abvMin + abvMax) / 2
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

var saveAllStyles = function(beers) {
  console.log('saveAllStyles is being called with', beers.length);

  var results = [];

  for(var i = 0; i < beers.length; i++) {

    // console.log(beers[i].abvMin, beers[i].abvMax, beers[i].ibuMin, beers[i].ibuMax);
    let ibu1 = parseInt(beers[i].ibuMin);
    let ibu2 = parseInt(beers[i].ibuMax);
    let abv1 = parseInt(beers[i].abvMin);
    let abv2 = parseInt(beers[i].abvMax);

    // console.log(abv1, abv2, ibu1, ibu2);



    // let ibu1 = beers[i].ibuMin || beers[i].ibuMax;
    // let ibu2 = beers[i].ibuMax || beers[i].ibuMin;
    // let abv1 = beers[i].abvMin || beers[i].abvMax;
    // let abv2 = beers[i].abvMax || beers[i].abvMin;
    if (!ibu1 || !ibu2) {
      console.log('This beer is missing an ibu: ', beers[i].name);
      console.log(`min = ${ibu1} and max = ${ibu2}`)
    }
    if (!abv1 || !abv2) {
      console.log('This beer is missing an abv: ', beers[i].name);
      console.log(`min = ${abv1} and max = ${abv2}`)
    }
    let ibuAvg = (ibu1 + ibu2) * .5;
    let abvAvg = (abv1 + abv2) * .5;

    // console.log('abv avg = ', abvAvg, 'ibu avg =', ibuAvg);

    let obj = {
      id: beers[i].id,
      name: beers[i].name,
      ibuAvg: ibuAvg,
      abvAvg: abvAvg,
      categoryId: beers[i].category.id, 
      categoryName: beers[i].category.name,
      description: beers[i].description
    };

    let newStyle = new Style(obj);
    results.push(obj);

    newStyle.save({});
  }
  return (results);
  // });
}




//     }
//   });
// };

// module.exports.selectAll = selectAll;
module.exports.saveAllStyles = saveAllStyles;
