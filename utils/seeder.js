import products from'../data/products.json';
import Product from '../Models/product.schema.js'
import dotenv from "dotenv";
import connectDatabase from '../Database/dbConfig.js';

dotenv.config({path: '../.env'})
connectDatabase();

const seedProducts = async ()=>{
    try{
        await Product.deleteMany();
        console.log('Products deleted!')
        await Product.insertMany(products);
        console.log('All products added!');
    }catch(error){
        console.log(error.message);
    }
    process.exit();
}

seedProducts();