import express from "express";
import { createProduct, getAllProduct } from "../Controller/product.controllers.js";

const productRouter=express.Router();

productRouter.post('/createProduct',createProduct)
productRouter.get('/getAllProduct',getAllProduct)

export default productRouter;