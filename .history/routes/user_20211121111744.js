const express = require('express');
const router = express.Router();
const user = require('../controllers/userController');
const {isSignedIn,getLogedInUser,isAdmin} = require('../middleware/auth');

// router.post("/user",user.create);
router.post("/user",user.create);



module.exports = router