const jwt = require("jsonwebtoken");
const expressJwt = require('express-jwt');
const {User} = require('../models');

exports.isSignedIn = expressJwt({
    secret: process.env.SECRET,
    userProperty: "auth",
    algorithms: ['HS256'],
  })
  
  exports.getLogedInUser = async (req, res, next) => {
    const user = await User.findByPk(req.auth.id);
    if (!user) {
      return res.status(400).json({
        error: "user does not exist"
      });
    }
    req.profile = user;
    next();
  }
  
