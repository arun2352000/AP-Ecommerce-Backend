import dotenv from 'dotenv'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import USER from '../Models/user.schema.js'

dotenv.config

export const signUpUser = async(req,res)=>{
    try{
        const {name,username,email,password,role,} = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        // const jwttoken = jwt.sign({id:})
        const user = new USER({name,username, email,password: hashedPassword, role,})
        await user.save();
        res.status(201).json({message: "User created successfully"});

    }catch(error){
        console.log(error);
        res.status(500).json({error:'register Failed, Internal server error',error})
        
    }
}


export const login = async(req,res)=>{
       try {
        const {username,password} = req.body;
    if(!username || !password){
        return res.status(400).json({error: "Please enter both username and password"})
    }
        const user = await USER.findOne({username}).select('+password')
        if(!user){
            return res.status(401).json({message: "User not found"})
        }
        const isMatch = await bcrypt.compare(password,user.password);
        if(!isMatch){
            return res.status(401).json({message: "Invalid credentials"})
        }
        const token = jwt.sign({id:user._id},process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES })
        user.token=token;
        await user.save();
        res.cookie('auth_token', token, {
            httpOnly: true,
            maxAge: process.env.COOKI_EXPIRES * 24 * 60 * 60 *1000,
            secure: true
                })
        res.status(201).json({message: "User logged in successfully",token})
       } catch (error) {
        console.log(error);
        res.status(500).json({error:'login Failed, Internal server error',error})
       } 
    }
   
export const logout = async (req,res, next)=>{
   res.cookie(
    'auth_token', 
    null,
    { httpOnly: true,
        maxAge: 0,
        // secure: true
        }
        )
        res.status(200).json({message: "User logged out successfully"})
    
}