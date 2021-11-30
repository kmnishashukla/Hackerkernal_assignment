const express = require('express');
const router = express.Router();
const auth = require('../controllers/authController');
const { createsignInValidation} = require('../validator/authValidator')
const { validate } = require('../validator/validate')

router.post("/signIn",createsignInValidation(),validate,auth.signIn);
router.get('/signOut',auth.signout);



module.exports = router