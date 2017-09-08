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
app.use(bodyParser.urlencoded({"extended" : false}));

app.get("/user",function(req,res){
  mongo.find({},function(err,result){
  res.send(result);
})
});
app.get("/users",function(req,res){
  res.send(req.query.id);
})

//route() will allow you to use same path for different HTTP operation.
//So if you have same URL but with different HTTP OP such as POST,GET etc
//Then use route() to remove redundant code.


app.listen(3000);
console.log("Listening to PORT 3000");
