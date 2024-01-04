const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Model = new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
});

const userModel = mongoose.model("user", Model);
module.exports = userModel;