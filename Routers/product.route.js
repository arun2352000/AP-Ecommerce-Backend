import { createProduct, getAllProduct } from "../Controllers/product.controllers.js"
import express from 'express'

const router=express.Router()
router.post('/createproduct', createProduct)
router.get('/getallproduct', getAllProduct)
export default router;