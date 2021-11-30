const express = require('express');
const router = express.Router();
const user = require('../controllers/userController');
const {isSignedIn,getLogedInUser} = require('../middleware/auth');
const upload = require('../middleware/upload');


router.post("/user",upload.single('profile_image'),user.create);
//router.post("/user",isSignedIn,getLogedInUser,user.create);



module.exports = router