const {User, Tag, Image ,userTag, sequelize} = require("../models");


exports.create = async (req,res) => {
    try {

    }catch(error){
        console.log(error);
        return res.status(400).json({
        success: false,
        message: "User creation failed",
        error: error
        });
    }
}