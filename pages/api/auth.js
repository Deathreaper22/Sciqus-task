import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

export default async function userInfo(req,res){
    const data = await req.body
    console.log(data);
    const hashedPassword = bcrypt.hash(data.password,10);
    
        const User = mongoose.model('user');
        const user = await User.findOne({email:data.email}).then(console.log("success"));       
        if(user){
            
            const match = bcrypt.compare(hashedPassword, user.password);
            if(user.email == data.email && match){
                console.log("match found");
            }else{
                console.log("match not found");
            }
        }
        
    res.send(200);   
}