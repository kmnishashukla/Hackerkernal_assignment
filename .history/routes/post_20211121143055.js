const express = require('express');
const router = express.Router();
const post = require('../controllers/postController');
const {isSignedIn,getLogedInUser} = require('../middleware/auth');
const upload = require('../middleware/upload');
const { createPostValidation} = require('../validator/postValidator')
const { validate } = require('../validator/validate')


// router.post("/user",upload.single('profile_image'),post.create);
//router.post("/user",isSignedIn,getLogedInUser,user.create);
router.post("/post",isSignedIn,getLogedInUser,upload.single('post_image'),createPostValidation(),validate,post.create);

router.get("/post",isSignedIn,getLogedInUser,post.findAll);
router.get("/post/search",isSignedIn,getLogedInUser,post.search);



module.exports = router