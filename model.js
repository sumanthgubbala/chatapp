const mongoose =require('mongoose');

let registeruser =new mongoose.Schema({
    username:{
        type : String,
        required :true
    },
    email:{
        type:String,
        required:true,
        unique :true
    },
    password:{
        type :String,
        required:true
    },
    confirmPassword:{
        type:String,
        required:true
    }


})

module.exports = mongoose.model('Registeruser',registeruser)