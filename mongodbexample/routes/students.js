var express = require('express');
var router = express.Router();
const mongoose=require('mongoose');
const StudentModel=require('../models/student.model');
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('students route works');
});
router.post('/add', function(req, res, next) {
    console.log(req.body);
    let newStudent = new StudentModel({
        firstname: req.body.firstname,
        lastname :req.body.lastname,
        age:req.body.age,
        dob:req.body.dob,
        department :req.body.department
    });
    newStudent.save(function(err,newStudent){
        if(err) res.send(err);
        else{
            res.send({message: 'student added ',studentObj:newStudent});
    }
    });
    mongoose.model
  });
  router.get('/list', function(req, res, next) {
   StudentModel.find(function(err,response){
    if(err) res.send(err);
        else
            res.send({students:response});
        });
});
router.get('/searchByFirstName', function(req, res, next) {
    const firstNameQuery=req.query.firstName;
    StudentModel.find({firstName: firstNameQuery}, function(err,response){
     if(err) res.send(err);
         else
             res.send({students:response});
         });
 });
 router.get('/searchById', function(req, res, next) {
    const Id=req.query.id;
    StudentModel.findById( Id, function(err,response){
     if(err) res.send(err);
         else
             res.send({status:200, students:response});
         });
 });
 router.put('/update', function(req, res, next) {
    const department=req.query.department;
    StudentModel.update( {age:30},{department:department}, function(err,response){
     if(err) res.send(err);
         else
             res.send({status:200, students:response});
         });
 });
 router.put('/updateUser', function(req, res, next) {
    const id=    req.query.userId;
    const fName =req.query.firstname;

    StudentModel.findByIdAndUpdate( id,{firstname:fName}, function(err,response){
     if(err) res.send(err);
         else
             res.send({status:200, students:response});
         });
 });








  module.exports = router;