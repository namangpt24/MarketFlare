import { comparePass, hashpass } from "../helpers/AuthHelper.js";
import userSchema from "../models/userModel.js";
import JWT from "jsonwebtoken";
import dotenv from "dotenv"

export const RegisterController=async (req,res)=>{
    try {
        const {name,email,password,phone,address,answer}=req.body;
        if(!name)
        {
            return res.send('Name is required for registration');
        }
        if(!email)
        {
            return res.send({message:'Email is required for registration'});
        }
        if(!password)
        {
            return res.send({message:'Password is required for registration'});
        }
        if(!phone)
        {
            return res.send({message:'Phone No. is required for registration'});
        }
        if(!address)
        {
            return res.send({message:'Address is required for registration'});
        }
        if(!answer)
        {
            return res.send({message:'Answer is required'});
        }
        const checkemail=await userSchema.findOne({email});
        if(checkemail)
        {
            return res.status(201).send({
                success:false,
                message:'This email is already registered',
            })
        }
        const hashpassword= await hashpass(password);
        const newuser=new userSchema({
            name,
            email,
            password:hashpassword,
            phone,
            address,
            answer,
        })
        await newuser.save();
        res.status(201).send({
            success:true,
            message:'User Registered Successfully',
            newuser
        })


    } catch (error) {
        console.log(error);
        return res.status(501).send({
            success:false,
            message:'Error in Registration of User',
            error
        })    
    }
   
};

export const LoginController = async (req,res)=>{
try {
    const {email,password}=req.body;
    if(!email)
    {
        return res.send({message:'Email is required'});
    }
    if(!password)
    {
        return res.send({message:'Password is required'});
    }
    const user=await userSchema.findOne({email});
    if(!user)
    {
        return res.status(404).send({
            success:false,
            message:"Email is not registered"
        })
    }
    const matchpass= await comparePass(password,user.password);
    if(!matchpass)
    {
        return res.status(200).send({
            success:false,
            message:"Password is incorrect"
        })
    }
    //token creation
    const token= await JWT.sign({id:user.id},process.env.JWT_SECRET,{
        expiresIn:"7d"
    })
    res.status(200).send({
        success:true,
        message:"Login is successful",
        user:{
            name:user.name,
            email:user.email,
            phone:user.phone,
            address:user.address,
            answer:user.answer
        },
        token
    })
    


} catch (error) {
    res.status(500).send({
        success:false,
        message:"Error in login",
        error
    })
}
}

export const forgotPasswordController = async (req,res)=>{
    try {
        const {email,answer,newpassword} = req.body;
        if(!email)
        {
            return res.status(400).send({message:"Email is required"});
        }
        if(!answer)
        {
            return res.status(400).send({message:"Answer is required"});
        }
        if(!newpassword)
        {
            return res.status(400).send({message:"New Password is required"});
        }

        const user = await userSchema.findOne({email,answer})

        if(!user)
        {
            return(
                res.status(400).send({
                    success:false,
                    message:"Invalid Email or Answer"
                })
            )
        }
        const hashed = await hashpass(newpassword);
        await userSchema.findByIdAndUpdate(user._id,{password:hashed});
        res.status(200).send({
            success:true,
            message:"Password changed successfully",
        })
        

    } catch (error) {
        console.log(error);
        return(
            res.status(500).send({
                success:false,
                message:"Something went wrong",
                error
            })
        )
    }
}