import express from "express";
import { createProduct, deleteProduct, getAllProduct, getSingleProduct, updateProduct } from "../Controller/product.controllers.js";
import { isAuthenticatedRoles, isAuthenticatedUser } from "../Middlewares/authenticate.js";


const productRouter=express.Router();

productRouter.post('/createProduct',isAuthenticatedUser, isAuthenticatedRoles('admin') ,  createProduct)
productRouter.get('/getAllProduct', isAuthenticatedUser, getAllProduct)
productRouter.get('/getSingleProductById/:id', getSingleProduct)
productRouter.put('/updateProduct/:id',updateProduct)
productRouter.delete('/deleteProduct/:id', deleteProduct)

export default productRouter;