import express from 'express'
import dotenv from "dotenv"
import cors from "cors"
import { connect } from "mongoose"
import connectDB from './database/dbConfig.js'

dotenv.config()

const PORT = process.env.PORT
const app = express();

app.use(cors())
app.use(express.json());

connectDB

app.get('/')
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
    })