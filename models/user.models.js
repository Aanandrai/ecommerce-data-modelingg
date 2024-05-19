import mongoose from 'mongoose';

const userSchema=new mongoose.Schema({
    userName:{
        type:String,
        required:true
    },
    email:{
        type:true,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    address:{
        type:String
    }
},{timestamps:true});

export const user=mongoose.model("user",userSchema);