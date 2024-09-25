import express from 'express'
import dotenv from "dotenv"
import cors from "cors"
import { connect } from "mongoose"
import connectDB from './Database/dbConfig.js'
import productRoutes from './Routers/product.route.js'

dotenv.config()

const PORT = process.env.PORT
const app = express();

app.use(cors())
app.use(express.json());

connectDB();

// app.get('/')

app.use('/api/product',productRoutes)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
    })