import mongoose, { connection } from "mongoose";
import user_model from "../models/user_model"
import bcrypt from 'bcrypt';

export default async function regUser(req,res){
    const reqData = await req.body;

    const hashEdPwd = bcrypt.hash(reqData.password,10);
        
    const User = user_model;
            const Newuser = new User({
                contact: reqData.contact,
                email: reqData.email,
                username:reqData.username,
                password: hashEdPwd
            })
            Newuser.save();
  
    res.send("/login");
}