import mongoose from "mongoose";
import configDotenv  from "dotenv";

configDotenv.config()
const mongoURL = process.env.PORT

const connectDB = async()=>{
    try {
        const connection = await mongoose.connect(mongoURL)
        console.log(`MongoDB Connected: ${connection.connection.host}`)
        return connection
}
    catch(error){
        console.error(error.message)
    }
}

export default connectDB