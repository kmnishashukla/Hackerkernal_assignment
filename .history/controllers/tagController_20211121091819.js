const { Tag } = require("../models");

exports.create = async (req,res) => {
    try {
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