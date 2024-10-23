import express from "express";
import { createProduct, deleteProduct, getAllProduct, getSingleProduct, updateProduct } from "../Controller/product.controllers.js";

const productRouter=express.Router();

productRouter.post('/createProduct',createProduct)
productRouter.get('/getAllProduct',getAllProduct)
productRouter.get('/getSingleProductById/:id', getSingleProduct)
productRouter.put('/updateProduct/:id',updateProduct)
productRouter.delete('/deleteProduct/:id', deleteProduct)

export default productRouter;