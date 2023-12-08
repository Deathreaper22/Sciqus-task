import mongoose from "mongoose";

mongoose.connect('mongodb://127.0.0.1:27017/AuthDB');
const userSchema = new mongoose.Schema({
    email: String,
    password: String,                
    contact: Number,    
    isAdmin: Boolean,
})

module.exports = mongoose.model("user",userSchema);

