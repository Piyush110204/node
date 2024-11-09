import express from "express";
import { addToCart, fetchCart, productQuantity, removeCart } from "../controller/cart.model.controller.js";

const router=express.Router();
router.post("/add-to-cart",addToCart);
router.post("/getCart",fetchCart);
router.post("/removeCart",removeCart);
router.post('/product-quantity',productQuantity);
export default router;