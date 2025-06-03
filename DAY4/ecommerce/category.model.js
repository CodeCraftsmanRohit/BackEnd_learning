import mongoose from "mongoose"
import { type } from "os"

const categorySchmea=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
},{timestamps:true})

export const Category=mongoose.model("Category",categorySchmea)