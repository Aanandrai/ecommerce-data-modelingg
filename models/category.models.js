import mongoose from "mongosoe";

const categorySchema =new mongoose({
    name:{
        type:String,
        unique:true
    }
},{timestamps:true});

export const category=mongoose.model("category",categorySchema);