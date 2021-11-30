const express = require('express');
const router = express.Router();
const post = require('../controllers/postController');
const {isSignedIn,getLogedInUser} = require('../middleware/auth');
const upload = require('../middleware/upload');


// router.post("/user",upload.single('profile_image'),post.create);
//router.post("/user",isSignedIn,getLogedInUser,user.create);
router.post("/post",isSignedIn,getLogedInUser,upload.single('post_image'),post.create);

router.get("/post",post.findAll);



module.exports = router