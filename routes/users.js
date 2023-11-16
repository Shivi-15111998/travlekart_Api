var express=require('express');
var router=express.Router()
var mongoose=require("mongoose")
var usermodel=require('../models/user')


// router.get('/', function(res,req,next){
//     usermodel.find((err,doc)=>{
//         if(!err){
//             res.render("list",{data:doc})
//         }else{
//            console.log("fialed data")
//         };
//     });

// });

router.get("/he", (req, res, next) => {
    
    usermodel.find()
      .then((doc) => {
        console.log(doc);
        res.status(200).json(doc);
      })
      .catch((err) => {
        return res.status(501).json({ message: "Error occured" });
      });
  });
  module.exports=router;