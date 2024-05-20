
// find()  ///get all data which i post him from database
//findById() //get data by id only
// save()   ///to save all data in db
///findByIdAndDelete() // to find element and delet it from db
///findByIdAndUpdate()  ///to find element and pdate it in db
//////////////////static codes in any project
const express = require('express')
require('dotenv').config();
const mongoose = require('mongoose');
const app = express()
const port = process.env.PORT || 3001
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs')   
app.use(express.static('public')) ///to ad css  or img or js make folder name public

//////////////////static codes in any project

//////////////delete 
///npm install method-override
var methodOverride = require('method-override')
app.use(methodOverride('_method'))
//////////////delete 

const allRoutes=require('./Routes/allRoutes')



// Auto refresh
const path = require("path");
const livereload = require("livereload");
const liveReloadServer = livereload.createServer();
liveReloadServer.watch(path.join(__dirname, 'public'));
 
 
const connectLivereload = require("connect-livereload");
app.use(connectLivereload());
 
liveReloadServer.server.once("connection", () => {
  setTimeout(() => {
    liveReloadServer.refresh("/");
  }, 100);
});
///npm run watch
// Auto refresh

///link in .env 
const mongoUri = process.env.MONGODB_URI;

mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

.then(()=>{
  app.listen(port, () => {
    console.log(`http://localhost:${port}/`)
  })

  
}).catch((error)=>{

  console.log(error)
})

app.use(allRoutes)
