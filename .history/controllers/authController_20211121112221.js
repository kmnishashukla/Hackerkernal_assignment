const { User } = require("../models");
const jwt = require('jsonwebtoken');
const bcrypt = require("bcrypt");
const path = require('path');

exports.signIn = async (req, res) => {
    try {
       
        let email = req.body.email;
        let password = req.body.password;
        
        const user = await User.findOne({where:{ email: email }});
         if(user){
             const passwordmatch = await bcrypt.compare(password,user.password);
             //console.log(passwordmatch);
             if(passwordmatch == true){
                 const token = jwt.sign({ id: user.id }, process.env.SECRET, { expiresIn: "8h" });
                 return res.json({ 
                     success: true, 
                     token, 
                     user: user,
                 });
             }else{
                 return res.status(400).json({
                     success: false,
                     message: "Invalid password"
                 });
             }
             
         }else{
             return res.status(400).json({
                 success: false,
                 message: "User not Found"
             });
 
         }
         
 
     
         
     } catch (error) {
           console.log(error);
         res.status(500).json({ err: error.message });
        }
}

exports.signout = (req, res) => {
    res.cookie("token", '', { expiresIn: "8h" });
    res.clearCookie("token");

    res.json({
        success: true,
        message: "User signout successfully"
    });
};