import express from "express"
import cors from 'cors'
import dotenvv from 'dotenv'
import cookieParser from "cookie-parser";
import connectDB from './Database/dbConfig.js';
import productRouter from './Router/product.router.js';
import userRouter from './Router/user.router.js';


dotenvv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors())
app.use(express.json());
app.use(cookieParser());

connectDB()

app.use('/app/product',productRouter)
app.use('/app/user', userRouter )

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
    })