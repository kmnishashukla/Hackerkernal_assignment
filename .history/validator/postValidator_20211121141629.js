const { body, validationResult } = require('express-validator');
const { Post } = require("../models");


exports.createPostValidation = (req, res) => {
    return [
        body('title', 'Title is required').notEmpty().trim(),
        body('description', 'Description is required').notEmpty().isEmail(),
        body('tagId', 'Tag is Required').notEmpty(),
    ]
}