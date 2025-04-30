const bcrpyt = require('bcrypt');
const jwt = require('jsonwebtoken');
const userData = require('../Models/db');


const signup = async (req,res )=>{
    
    try{
        const { name , email , password } = req.body;
        const user = await userData.findOne({ email });
        if(user){
            return res.status(409)
                // conflict error
                .json({message: 'User is already exist', success:false });
        }
        const data = new userData({ name, email, password });
        data.password = await bcrpyt.hash(password, 10);
        //  10 is the salt 
        await data.save();
        res.status(201)
            .json({
                message:"Signup successfully",
                success:true
            })
 
    }
    catch (err){
        res.status(500)
            .json({
                message:"Internal Server error",
                success: false
            })
        
    }

}

const login = async (req,res )=>{
    
    try{
        const {  email , password } = req.body;
        const user = await userData.findOne({ email });
        const errorMsg = 'Login Failed , Email or Password must be Incorrect';
        if(!user){
            return res.status(403)
                .json({message: errorMsg, success:false });
        }

        const isPassCorrect = await bcrpyt.compare(password , user.password);
        if(!isPassCorrect){
            return res.status(403)
            .json({message: errorMsg, success:false });  
        }
        // password check kiye then we have to create a JWT token
        const jwtToken = jwt.sign(
            { email:user.email , _id : user._id},
            // phela parameter hota hai payload , is payload se encrypt hoga
            process.env.JWT_SECRET ,
            {expiresIn:'24h'}

        )

       
        res.status(200)
            .json({
                message:"Login successfully",
                id:user._id,
                success:true,
                jwtToken,
                email,
                name:user.name

            })
 
    }
    catch (err){
        res.status(500)
            .json({
                message:"Internal Server error",
                success: false
            })
        
    }
    
}

module.exports = {
    signup,
    login
}