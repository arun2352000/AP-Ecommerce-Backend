import express from 'express'
import dotenv from "dotenv"
import cors from "cors"
import multer from 'multer'

import { connect } from "mongoose"
import connectDB from './Database/dbConfig.js'
import productRoutes from './Routers/product.route.js'

dotenv.config()

const PORT = process.env.PORT
const app = express();

app.use(cors())
app.use(express.json());

// multer start

let storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './public/images')
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() *1)
        cb(null, file.originalname + '-' + uniqueSuffix + path.extname(file.originalname)  )
    }
})
let maxSize = 2 * 1024 * 1024;
let upload = multer({
    storage: storage,
    limits: {
        fileSize: maxSize
    }
})

let uploadHandler = upload.single('file');

//end of multer

connectDB();

// app.get('/')

app.use('/api/product',productRoutes)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
    })