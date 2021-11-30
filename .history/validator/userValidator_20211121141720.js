const { body, validationResult } = require('express-validator');
const { User } = require("../models");


exports.createUserValidation = (req, res) => {
    return [
        body('name', 'Name Is required').notEmpty().trim(),
        body('email', 'Invalid Email').notEmpty().isEmail(),
        body('password', 'Password is required').notEmpty().trim(),
        body('tagsId', 'Tag is Required').notEmpty(),
        body('email').custom(value => {
        return User.findOne({ where: { email: value } }).then(user => {
            if (user) {
            return Promise.reject('Email already exists.');
            }
        });
        }),
    ]
}