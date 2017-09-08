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
});

var user =mongoose.model("customers",userSchema)
module.exports={ user :user}
