import PRODUCT from "../Models/product.Schema.js";

//put product list 

export const createProduct = async(req,res) => {
    try {
        const {name,price,description,category,seller,stock,images,ratings} = req.body;
        const newProduct = new PRODUCT({name,price,description,category,seller,stock,images,ratings})
        await newProduct.save()
        res.status(200).json({data: newProduct});
        } catch (error) {
            console.log(error);
            
            res.status(500).json({message:error.message});
            }

}

// get all products from api

export const getAllProduct = async(req,res)=>{
    console.log('Request received');
    try {
        const products = await PRODUCT.find()
        res.status(200).json({message:"product fetched successfully",data: products});
    }
    catch(error){
        res.status(500).json({message:"Error fetching product",error});
        
    }
}

// get single products

export const getSingleProduct = async(req,res)=>{
    try {
        const productid = req.params.id;
        const product = await PRODUCT.findById(productid)
        if (!product){
            res.status(404).json({message:"Product not found"})
        }
        res.status(200).json({message:"Product fetched successfully",data: product});
    } catch (error) {
        res.status(500).json({message:"Error fetching product",error});
    }
}

// update single product 
export const updateProduct = async(req,res)=>{
    try {
        const productid = req.params.id;
        const {name,price,description,category,seller,stock,images,ratings} = req.body;
        const product = await PRODUCT.findByIdAndUpdate(productid,req.body,{name,price,description,category,seller,stock,images,ratings})
        if (!product){
            res.status(404).json({message:"Product not found"})
            }
            res.status(200).json({message:"Product updated successfully",data: product});
        
       
        } catch (error) {
            res.status(500).json({message:"Error updating product",error});
            }
        
        }

// delete product
export const deleteProduct = async(req,res)=>{
    try {
        const productid = req.params.id;
        const product = await PRODUCT.deleteOne({_id:productid})
        if (product.deletedCount === 0){
            res.status(404).json({message:"Product not found"}) 
            }
            res.status(200).json({message:"Product deleted successfully",data: product}).end();
        } catch(error){
            res.status(500).json({message:"Error deleting product",error});
            }
        }