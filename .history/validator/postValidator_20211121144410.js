const { body, validationResult } = require('express-validator');
const { Post } = require("../models");


exports.createPostValidation = (req, res) => {
    return [
        body('title', 'Title is required').notEmpty().trim(),
        body('tagId', 'Tag is Required').notEmpty(),
    ]
}