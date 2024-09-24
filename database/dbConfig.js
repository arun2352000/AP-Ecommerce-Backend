import mongoose from "mongoose";
import configDotenv  from "dotenv";

configDotenv.config()
const mongoURL = process.env.MONGODBCONNECTIONSSTRING

const connectDB = async()=>{
    try {
        const connection = await mongoose.connect(mongoURL)
        console.log("mongoose connected")
        return connection
}
    catch(error){
        console.error(error.message)
    }
}

export default connectDB