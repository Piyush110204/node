import express from "express";
import { productList, saveInBulk } from "../controller/product.controller.js";
import { auth } from "../auth/auth.js";
const router = express.Router();
router.post("/save-in-bulk",saveInBulk);
router.get("/list",productList);

export default router;