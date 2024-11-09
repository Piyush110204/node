import { Product } from "../model/product.model.js";

export const saveInBulk=async (request,response,next)=>{
    try {
        let productList=request.body.products;
        
        await Product.insertMany(productList);
        return response.status(200).json({message : "all product added"})
    } catch (error) {
        return response.status(500).json({error});
    }
}
export const productList= async (request,response,next)=>{
        Product.find()
        .then((result)=>{
            return response.status(200).json({result});
        }).catch((error)=>{
            return response.status(500).json({error});
        })
}