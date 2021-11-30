const express = require('express');
const router = express.Router();
const user = require('../controllers/userController');
const upload = require('../middleware/upload');
const { createUserValidation} = require('../validator/userValidator')
const { validate } = require('../validator/validate')


router.post("/user",upload.single('profile_image'),createUserValidation(),validate,user.create);




module.exports = router