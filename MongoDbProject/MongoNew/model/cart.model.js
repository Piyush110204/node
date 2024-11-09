import mongoose, { model } from "mongoose";
const cartSchema=new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    },
    cartItems:[
        {
            productId:{
                type:mongoose.Schema.Types.ObjectId,
                ref:"product"
            },
            quantity:{
                type:Number
            }
        }
    ]
})
export const Cart=mongoose.model("cart",cartSchema);