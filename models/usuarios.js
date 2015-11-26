var db = require('../db') // Hay que poner el fichero de conexion con la BD

// para devolver todo
exports.all = function(cb) {
  var collection = db.get().collection('users')

  collection.find().toArray(function(err, docs) {
    cb(err, docs)
  })
}

exports.usuario = function(cb) {
  /*var collection = db.get().collection('users')

  collection.find().limit(1).toArray(function(err, docs) {
    cb(err, docs)
  })*/
  var collection = db.get().collection('users');
  
  collection.find({name: 'modulus user'}).toArray(function (err, result) {
    if (err) {
      console.log(err);
    } else if (result.length) {
      console.log('Found:', result);
    } else {
      console.log('No document(s) found with defined "find" criteria!');
    }
  });
}