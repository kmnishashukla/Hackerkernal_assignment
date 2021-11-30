const express = require('express');
const router = express.Router();
const post = require('../controllers/postController');
const {isSignedIn,getLogedInUser} = require('../middleware/auth');
const upload = require('../middleware/upload');


// router.post("/user",upload.single('profile_image'),post.create);
//router.post("/user",isSignedIn,getLogedInUser,user.create);
router.post("/post",post.create);



module.exports = router