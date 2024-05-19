import mongoose from "mongoose";

const productSchema=new mongoose({
    productName:{
        type:String,
        required:true
    },

    description:{
        type:String,
        required:true
    },

    productImage:{
        type:String,
        required:true
    },

    productCategory:{
        type:mongoose.Schema.Types.Object.Id,
        ref:"category",
    },

    price:{
        type:Number,
        required:true
    },

    stock:{
        type:Number,
        required:true
    },

    productRating:{
        type:Number,
        default:0
    },
    owner:{
        type:String,
        required:true
    }

},{timestamps:true});

export const product=mongoose.model("product",productSchema);