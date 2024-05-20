const User=require("../models/dataCustomerschema")  ///data from models file
var moment =require('moment')  ///use to  beutify date and time


const aa=(req, res) => {
  console.log("____________________________")
  User.find()  ///get all data which i post him from database
  
  .then((result)=>{
    res.render("filx",{arrASHRAF:result,moment:moment})    ///get data like result from data base take new name for example arrASHRAF
    ///arrASHRAF can make foreach on it in filx.ejs file to show data
  }) 
  .catch((error)=>{console.log(error)})
  
  }

  const bb=(req, res) => {
    res.render("user/add")     ////from view folder
    
  }

  const cc=(req, res) => {
    User.findById(req.params.id) ///static code to show data only by id
    .then((result)=>{
      
  res.render("user/edit",{ASHHHHRAF:result,moment:moment})      ///"user/edit"/file from view folder
    }).catch((error)=>{
      console.log(error)
    })
    
  }

  const dd= (req, res) => { ///static code to show data by id
    User.findById(req.params.id) ///static code to show data only by id
    .then((result)=>{
      res.render("user/view",{ASHHHHRAF:result,moment:moment})      ///"user/view"/file from view folder
      ///get data like result from data base take new name for example ASHHHHRAF
      ///ASHHHHRAF can make foreach on it in view.ejs file to show data
    })
    .catch((error)=>{
      console.log(error)
    })
    }

    const ee=(req, res) => {
      console.log(req.body)
      User.create(req.body)   
    .then(()=>{
      res.redirect("/")  ///after submit form go to /
    })
    .catch((error)=>{})
      }


      const ff=(req, res) => {
        const TEXtyousea=req.body.TEXTYOUSEARCH.trim() /// to remove white space  from start and end
        User.find({$or: [{FNamee:TEXtyousea},{LNamee:TEXtyousea}]})   
      .then((result)=>{
        console.log(result)
       res.render("user/search",{AZSHR:result,moment:moment})  ///after submit form go to /
      })
      .catch((error)=>{})
        }

const gg=(req, res) => { 
  User.findByIdAndDelete(req.params.id)
   .then(()=>{
      res.redirect("/")
    })
    .catch((error)=>{})
}

const hh=(req, res) => {
  User.updateOne({_id: req.params.id}, req.body)  //updateOne() method
  .then((result) => {
    console.log(result)
      res.redirect("/");
  });
}

module.exports={aa,bb,cc,dd,ee,ff,gg,hh}