const mongoose=require('mongoose');
const User=require('./userModel')
const db={}
db.mongoose=mongoose;
db.user=User;

module.exports=db;