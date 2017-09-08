var http = require('http');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";


exports.d=MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var query = { address: "Mumbai" };
  var mysort={name:-1};
  db.collection("customers").find(query).sort(mysort).toArray(function(err, result) {
    if (err) throw err;
      console.log(result);
    db.close();
  });
});
