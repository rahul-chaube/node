var express     =   require("express");
var app         =   express();
var bodyParser  =   require("body-parser");
var mongoOp     =   require("./mongo");
var router      =   express.Router();
var mongo = require("./mongo.js").user;
var mongoose=require("mongoose");
//mongoose.Promise=global.Promise;
var url = "mongodb://localhost:27017/mydb";
mongoose.connect(url,{server:{poolSize:10}})
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({"extended" : true}));

app.get("/user",function(req,res){
  mongo.find({},function(err,result){
  res.send(result);
})
});


app.get("/users",function(req,res){
  res.send(req.query.name + " ip Adress "+req.ip);
})
app.post('/users', function(req, res) {
    var name = req.body.name;
    var password = req.body.password;

    mongo.find({address:"Mumbai"},{_id:false,name:false},function(err,result){
    res.send(result);
  })
});
app.post('/insert', function(req, res) {
    var name = req.body.name;
    var address = req.body.address;
    console.log(" Step 1 ");
    var myObj=[{name:name,address:address}]

    mongo.insertMany(myObj, function(err, result) {
    if (err) throw  res.send(err);


  });
  mongo.find({address:"Mumbai"},{_id:false,address:true,name:true},function(err,result){
  res.send(result);
})
});


//route() will allow you to use same path for different HTTP operation.
//So if you have same URL but with different HTTP OP such as POST,GET etc
//Then use route() to remove redundant code.


app.listen(3000);
console.log("Listening to PORT 3000");
