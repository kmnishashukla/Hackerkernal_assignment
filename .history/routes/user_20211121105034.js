const express = require('express');
const router = express.Router();
const user = require('../controllers/userController');

router.post("/tag",user.create);



module.exports = router