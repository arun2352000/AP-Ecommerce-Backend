import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
{
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
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
        // created_at: {
        //     type: Date,
        //     default: Date.now
        //     },
        //     updated_at: {
        //         type: Date,
        //         default: Date.now
        //         }
},
{
    timestamps: true
}
)
const USER = mongoose.model('USER', userSchema);
module.exports = USER;