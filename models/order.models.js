import mongoose from "mongoose";

const orderItemSchema=new mongoose({
    productId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"product",
        required:true
    },
    quantity:{
        type:Number,
        required:true
    }
})


const orderSchema=new mongoose({
    orderPrice:{
        type:Number,
        required:true
    }, 
    orderItem:{
        type:[orderItemSchema]
    },
    customer:{
        type:mongoose.Schema.Types.Object.Id,
        ref:"user"
    },
    address:{
        type:String,
        required:true
    },
    status:{
        type:String,
        enum:["PENDING","CANCELLED","DELIVERED"],
        default:"PENDING"
    }


},{timrstamps:true});

export const order=mongoose.model("order",orderSchema);