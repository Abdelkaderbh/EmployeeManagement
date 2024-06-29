import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
dotenv.config();


const app = express();
const port = process.env.PORT || 5000;
const db:string = (process.env.DATABASE_URL as string);

app.use(express.json());


try {
mongoose.connect(db).then(()=>{
    console.log("🟢 Connected to database");
    app.listen(port,()=>{
        console.log(`🟢 server is running on http://localhost:${port}`);
    });
}); 
} catch (error) {
   console.log(error);
    
}
