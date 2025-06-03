import mongooose from "mongoose"
import { type } from "os"

const orderItemSchema=new mongooose.Schema({
    productId:{
        type:mongooose.Schema.Types.ObjectId,
        ref:"Product"
    },
    quantity:{
        type:Number,
        required:true
    }
})

const orderSchema=new mongooose.Schema({

    orderPrice:{
        type:Number,
        required:true
    },
    customer:{
        type:mongooose.Schema.Types.ObjectId,
        ref:"User"
    },
    orderItems:{
        type:[orderItemSchema]
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

},{timestamps:true})

export const Order=mongooose.model("Order",orderSchema)