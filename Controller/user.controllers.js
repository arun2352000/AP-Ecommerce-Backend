import dotenv from 'dotenv'

dotenv.config

export const signUpUser = async(req,res)=>{
    try{
        const {name,email,password,role} = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({name, email,password: hashedPassword, role})
        await user.save();
        res.status(201).json({message: "User created successfully"});

    }catch(error){
        console.log(error);
        res.status(500).json({error:'register Failed, Internal server error',error})
        
    }
}
