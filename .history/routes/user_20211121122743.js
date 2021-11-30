const express = require('express');
const router = express.Router();
const user = require('../controllers/userController');
const upload = require('../middleware/upload');


router.post("/user",upload.single('profile_image'),user.create);




module.exports = router