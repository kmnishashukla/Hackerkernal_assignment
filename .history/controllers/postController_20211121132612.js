const {User,Post, Tag, Image ,userTag, sequelize} = require("../models");




exports.create = async (req,res) => {
    try {
        console.log(req.profile.id);
        await sequelize.transaction(async (t) => { 
           let image = ""; 
           let postdetails = {
            userId:req.profile.id,
            title: req.body.title,
            description:req.body.description,
            tagId: req.body.tagId
        } 
        const post = await Post.create(postdetails,{ transaction: t });
        let userTagsdetails = {
            userId:req.profile.id,
            tagId: req.body.tagId
        }
        const userTags = await userTag.create(userTagsdetails,{ transaction: t });
        if (req.file) {
                let image_values = {
                imageable_id: req.profile.id, 
                imageable_type:"Post",  
                image_type: req.file.fieldname,
                title: req.file.originalname,
                src: req.file.path,
                mime_type: req.file.mimetype
                }
              image = await Image.create(image_values, { transaction: t });
            
            }

            return res.status(200).json({
                success:true,
                message:"User created successfully",
                post : post,
                userTags:userTags,
                image: image,
            })

        })  

    }catch(error){
        console.log(error);
        return res.status(400).json({
        success: false,
        message: "Post creation failed",
        error: error
        });

    }
}


exports.findAll = async (req,res) => {
    try {
      let post = await Post.findAll({
          include:[
              {model : User, attributes:['name'] },
              {model : Tag, attributes:['name'] }
          ]
        });
      return res.status(200).json({
          success: true,
          message: "Post data fetched successfully ",
          post : post
      })

    }catch(error){
        console.log(error);
         return res.status(400).json({
             success: false,
             message : "Post data fetching error",
             error: error
        })
       
    }
}
