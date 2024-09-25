import PRODUCT from "../Models/product.schema.js";

export const createProduct = async(req,res) => {
    try {
        const {name,price,description} = req.body;
        const newProduct = new PRODUCT({name,price,description});
        await newProduct.save()
        res.status(200).json({data: newProduct});
        } catch (error) {
            console.log(error);
            
            res.status(500).json({message:error.message});
            }

}