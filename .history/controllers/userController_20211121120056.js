const {User, Tag, Image ,userTag, sequelize} = require("../models");
const bcrypt = require("bcrypt");


exports.create = async (req,res) => {
    try {
        await sequelize.transaction(async (t) => { 
            let password = req.body.password;
            let hashpassword = await bcrypt.hash(password,10);
            let userDetails = {
                name: req.body.name,
                email : req.body.email,
                password:hashpassword
            }
            let  user = await User.create(userDetails,{ transaction: t });
            let userTags = [];
            let image = "";
           // if(req.body.tagsId){
                for (let i = 0; i < req.body.tagsId.length; i++) {
                    userTags[i] = await userTag.create({
                        "userId": user.id,
                        "tagId": req.body.tagsId[i]
                    }, { transaction: t });            
                }
           // }
           if (req.file) {
            let image_values = {
              image_type: req.file.fieldname,
              title: req.file.originalname,
              src: req.file.path,
              mime_type: req.file.mimetype
            }
            // image = await user.createImage(image_values, { transaction: t });
            image = await Image.create(image_values, { transaction: t });
           }
    
            

            return res.status(200).json({
                success:true,
                message:"User created successfully",
                user : user,
                userTags:userTags,
                image: image,
            })



        })

    }catch(error){
        console.log(error);
        return res.status(400).json({
        success: false,
        message: "User creation failed",
        error: error
        });
    }
}