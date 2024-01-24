import bcrypt from "bcrypt";

export const hashpass=async (password)=>{
    try{
        const saltRounds=10;
        const hashedPass=bcrypt.hash(password,saltRounds);
        return hashedPass;
    }
    catch(error){
        console.log(error);
    }
}

export const comparePass=async (password,hashedPass)=>{
    return bcrypt.compare(password,hashedPass);
}