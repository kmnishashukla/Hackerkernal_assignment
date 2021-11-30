const express = require('express');
const router = express.Router();
const auth = require('../controllers/authController');

router.post("/signIn",auth.create);



module.exports = router