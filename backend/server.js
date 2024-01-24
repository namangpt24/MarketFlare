import express from "express"
import dotenv from "dotenv"
import morgan from "morgan";
import mongoDb  from "./db.js";
import authRouter from "../routes/authRoute.js";

import cors from 'cors';
dotenv.config();
const app = express();
const PORT= process.env.PORT||8080;

mongoDb(); // mongo db is connected
//middlewares
app.use(express.json());
app.use(cors());
app.use(morgan('dev'))//morgan is a middleware which logs http requests and responses
app.use("/api/v1/auth",authRouter);


app.get('/',(req,res)=>{
   res.send("<h1>Hello to this app<h1/>")
})



app.listen(PORT,()=>{
    console.log(`server is started in ${process.env.DEV_MODE} mode on port ${process.env.PORT}`)
})