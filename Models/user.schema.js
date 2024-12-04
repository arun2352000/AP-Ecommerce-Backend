import mongoose from "mongoose";
import validator from "validator";

const userSchema = new mongoose.Schema(
{
    name : {
        type : String,
        required : [true, 'please enter name'] 
    },
    username: {
        type: String,
        required: [true, 'please enter username'],
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate:[validator.isEmail, '{VALUE} is not a valid email']
                
                
    },
    password: {
        type: String,
        required: true,
        minLength: [8, 'password must be at least 8 characters'],
        // maxLength: [32, 'password must be at most 32 characters'],
        select: false,
        },
    role: {
        type: String,
        enum: ['admin', 'user'],
        default: 'user'
        },

    token:{
            type: String,
            default: ''
        },
        isEmail:{
            type: Boolean,
            default: false
            }
       
},
{
    timestamps: true
}
)
const USER = mongoose.model('USER', userSchema);
export default USER;