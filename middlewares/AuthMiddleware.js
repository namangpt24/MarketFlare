import JWT from "jsonwebtoken";
import userModel from "../models/userModel.js";

//middleware process the request before the server send a response
export const RequireSignIn= async (req,res,next)=>{
    try {
        const decode=JWT.verify(req.headers.authentication,process.env.JWT_SECRET);
        req.user=decode;
        next();
    } catch (error) {
        console.log(error);
    }
}

//admin access
export const isAdmin = async (req,res,next)=>{
    try {
        const user= await userModel.findById(req.user._id)
        if(user.role!==1)
        {
            res.status(401).send({
                success:false,
                message:"Unauthorised user"
            })
        }
        else{
            next();
        }
    } catch (error) {
        console.log(error);
    }
}