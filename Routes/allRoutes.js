const express = require("express");
const router = express.Router();
const User=require("../models/dataCustomerschema")  ///data from models file
var moment =require('moment')  ///use to  beutify date and time
const controller=require("../controllers/userControllers")

//////////////get
router.get('/', controller.aa)
  
  router.get('/user/add.html',controller.bb)
  router.get('/edit/:id', controller.cc)
  router.get('/view/:id',controller.dd)
  
  
  
  
  
      /////////////////get
  
  
      /////////send///////post data from page to data base
  
      router.post('/user/add.html', controller.ee)
  
  
        ///////////////
        ////go to navbar file and add    action="/search"  method="post"       <form class="d-flex" role="search" action="/search" method="post">
  
        router.post('/search', controller.ff)
    
      ////////////////post data from page to data base
  
  ////////delete reques 
  {/* <form action="/RASASH<%= item._id %>?_method=DELETE" method="post">
  <button type="submit" class="btn btn-danger">
    Delete
  </button>
  </form> */}
  
  router.delete('/RASASH/:id', controller.gg)
  ////////delete reques 
  
  
  ////put request to update/edit data
  ///in edit.ejs we go to file and add  name="value" to each element for example name="FNamee" 
  // routerrs.put('/edit/:id', (req, res) => { 
  //   User.findByIdAndUpdate(req.params.id,req.body)
  //    .then((result)=>{
  //   console.log(result)
  //       res.redirect("/")  ///go to main page after finish
  //     })
  //     .catch((error)=>{})
  // })
  
  ///another way
  router.put("/edit/:id", controller.hh); 
  ////put request to update/edit data
  

  module.exports = router;