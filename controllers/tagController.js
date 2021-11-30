const { Tag } = require("../models");

exports.create = async (req,res) => {
    try {
      let tagData = [
          {name: "Fitness"},
          {name: "Gym"},
          {name: "Running"},
          {name: "Cycling"},
          {name: "Bodybuilding"},
          {name: "Swimming"},
          {name :"Racing"},
      ] ;
      const tag = await Tag.bulkCreate(tagData);  
      return res.status(200).json({
          success: true,
          message: "Tag created successfully",
          tag:tag
      })  

    }catch(error){
         return res.status(400).json({
            success: false,
            message: "tag creation failed",
            error: error
         })
    }
}

//
exports.findAll = async (req,res)=>{
    try{
        const tag = await Tag.findAll();
        return res.status(200).json({
            succes:true,
            message:"Tag fetched successfully",
            tag:tag
        })

    }catch(error){
        return res.status(400).json({
            successs:false,
            message:"Tag fetching error",
            error: error
        })

    }
}