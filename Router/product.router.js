import express from "express";
import { createProduct, getAllProduct } from "../Controller/product.controllers.js";

const router=express.Router();

router.post('/createProduct',createProduct)
router.get('/getAllProduct',getAllProduct)