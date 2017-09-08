var mongojs = require('mongojs')
var url = "mongodb://localhost:27017/mydb";
var db = mongojs('url', ['customers'])
db.mycollection.find(function (err, docs) {
    // docs is an array of all the documents in mycollection
if (err) {
  console.log(err);
}
console.log(docs);
})
