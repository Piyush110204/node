import mongoose from "mongoose";
const user=new mongoose.Schema({
    username:{
        type:String,
        trim:true
    },
    email:{
        type:String,
        trim:true,
        unique:true
    },
    password:{
        type: String
    },
    contact:{
        type: Number,
        trim: true
   },
   profile:{
        type:String,
        trim:true
   }
},{versionKey: false}
)

export const User = mongoose.model("user",user);