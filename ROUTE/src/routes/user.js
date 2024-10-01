const express = require('express');
const { loginuser, logoutuser, registeruser, userpasswordforget } = require('../controler/user')

const userRoute = express.Router();

userRoute.get('/login', loginuser);
userRoute.get('/logout', logoutuser);
userRoute.get('/register', registeruser);
userRoute.get('/forgetpassword', userpasswordforget);

module.exports ={ userRoute};