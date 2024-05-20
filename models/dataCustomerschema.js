const mongoose = require('mongoose');
const Schema=mongoose.Schema;

// define the Schema (the structure of the article)
const CUSTOMerSchema = new Schema({
  FNamee: String,  ////html  <input name="userNameee" type="text">
  LNamee: String,  ////html  <input name="userNameee" type="text">
  emailll:String , ///
  age:Number,
  Telephone:Number,
  Gender:String,
  country:String,

},{ timestamps: true }   ////to add time and date
);

const User = mongoose.model("CustomerASH", CUSTOMerSchema);  ///schema in database mongo


// export the model
module.exports =User