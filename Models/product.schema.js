import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name : {
        type: String,
        required: [true, "Please enter product name"],
        // trim: true,
        // maxLength: [100, "Product name cannot exceed 100 characters"]
    },
    price: {
        type: Number,
        required: true,
        default: 0.0
    },
    description: {
        type: String,
        required: [true, "Please enter product description"]
    },
    ratings: {
        type: String,
        default: 0
    },
    images: [
        {
            image: {
                type: String,
                required: true
            }
        }
    ],
    category: {
        type: String,
        required: [true, "Please enter product category"],
        enum: {
            values: [
                'Electronics',
                'Mobile Phones',
                'Laptops',
                'Accessories',
                'Headphones',
                'Food',
                'Books',
                'Clothes',
                'Shoes',
                'Beauty',
                'Health',
                'Sports',
                'Outdoor',
                'home appliances',
                'Furniture'
            ],
            message : "Please select correct category"
        }
    },
    seller: {
        type: String,
        required: [true, "Please enter product seller"]
    },
    stock: {
        type: Number,
        required: [true, "Please enter product stock"],
        maxLength: [150, 'Product stock cannot exceed 150']
    },
    numOfReviews: {
        type: Number,
        default: 0
    }
    // reviews: [
    //     {
    //         user:{
    //             // type:mongoose.Schema.Types.ObjectId,
    //             // ref: 'User'
    //             type : String,
    //             required:true
    //         },
    //         rating: {
    //             type: String,
    //             required: true
    //         },
    //         comment: {
    //             type: String,
    //             required: true
    //         }
    //     }
    // ],
    // user: {
    //     type : mongoose.Schema.Types.ObjectId
    // }
    // ,
    // createdAt:{
    //     type: Date,
    //     default: Date.now()
    // }
},
{ timestamps:true }
);

const PRODUCT = mongoose.model('PRODUCT',productSchema)
export default PRODUCT