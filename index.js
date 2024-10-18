import express from "express"
import cors from 'cors'
import dotenvv from 'dotenv'


dotenvv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors)
app.use(express.json());

