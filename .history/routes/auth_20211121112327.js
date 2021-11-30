const express = require('express');
const router = express.Router();
const auth = require('../controllers/authController');

router.post("/signIn",auth.signIn);
router.get('/signOut',auth.signout);



module.exports = router