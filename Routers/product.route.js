import { createProduct } from "../Controllers/product.controllers.js"
import express from 'express'

const router=express.Router()
router.post('/createproduct', createProduct)
export default router;