import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const mongoDb=async ()=>{
    try{
        const conn = await mongoose.connect(process.env.MONGO_URL,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
            dbName: 'E-commerce'
        });
        console.log("mongo db successfully connected")
    }
    catch(error){
        console.log(`There is a problem connecting with mongo db server ${error}`);
    }
    


}
export default mongoDb;
