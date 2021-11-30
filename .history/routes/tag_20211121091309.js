const express = require('express');
const router = express.Router();
const tag = require('../controllers/tagController');

router.post("/tag",tag.create);



module.exports = router