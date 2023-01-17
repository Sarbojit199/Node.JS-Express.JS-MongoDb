const mongoose=require('mongoose');
var studentSchema =mongoose.Schema({
    studentid: Number,
    firstname:String,
    lastname :String,
    age:Number,
    dob:String,
    department :String
  });
  var StudentModel =mongoose.model("Student",studentSchema);
  module.exports=StudentModel;