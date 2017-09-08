var mongoose    =   require("mongoose");
var schema =mongoose.Schema;

var userSchema=new schema({
  name:{
    type:String,
    required:true
  },
  address:{
    type:String,
    required:true
  }
},{
    versionKey: false // You should be aware of the outcome after set to false
});

var user =mongoose.model("customers",userSchema)
module.exports={ user :user}
