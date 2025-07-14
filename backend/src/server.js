import dotenv from "dotenv";
dotenv.config();
import express from 'express';

import prRoutes from '../routes/prroutes.js';
import loginRoutes from "../routes/login.js";
import {connectDB} from "../config/db.js";

const PORT= process.env.PORT || 3000;

console.log(process.env.MONGO);
const app=express();

connectDB();
app.use(express.json());
app.use("/Register", prRoutes);
app.use("/login", loginRoutes);
app.listen(PORT, () => 
    console.log('Server running at http://localhost:'+PORT));


