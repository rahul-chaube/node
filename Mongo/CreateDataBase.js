var MongoClient=require('mongodb').MongoClient;
var url ="mongodb://localhost:27017/mydb"
MongoClient.connect(url,function(err,db){
    if(err) throw err;
    var myObj=[{name:"Ahy Technology ", address:"Mumbai"},
                {name:"TCS Technology ", address:"Lakhanau"},
                {name:"Accenture Corporation ", address:"Mumbai"},
                {name:"Wipro ", address:"Mumbai"},
                {name:"L&T ", address:"Mumbai"},
                {name:"Veritas LLC ", address:"Mumbai"},
                {name:"Symantec ", address:"Mumbai"},
                {name:"Microsoft ", address:"Mumbai"},
                {name:"Oracle ", address:"Mumbai"},
                {name:"Capgeminie ", address:"Mumbai"}];
    db.collection("customers").insertMany(myObj,function(err,res){
      if (err) {
        throw err;
      }
      console.log("One Document is Inserted ");
    });
      db.close();

});
