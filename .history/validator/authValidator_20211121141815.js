const { body, validationResult } = require('express-validator');
const { Post } = require("../models");


exports.createPostValidation = (req, res) => {
    return [
        body('email', 'Email is required').notEmpty().isEmail(),
        body('password', 'Password is required').notEmpty().trim(),
    ]
}