const { body, validationResult } = require('express-validator');
const { User } = require("../models");


exports.createsignInValidation = (req, res) => {
    return [
        body('email', 'Email is required').notEmpty().isEmail(),
        body('password', 'Password is required').notEmpty().trim(),
    ]
}