const express = require("express");
const router = express.Router();
const User = require('../models/user')
const { sendToken, isLoged } = require("../controlers/user");


// signup
router.post('/signup', (req, res) => {
    const newUser = new User(req.body);
    newUser.save(() => {
        return res.status(200).json(sendToken(newUser, res));
    })
})

// signin
router.post('/signin', (req, res) => {
    User.findOne({ email: req.body.email }, (error, user) => {
        if (error || !user || !user.checkPassword(req.body.password)) {
            res.send('password or email are not match...');
        } else {
            return res.status(200).json(sendToken(user, res));
        }
    });
})
 
// signin with a token
router.get('/token', isLoged, (req, res) => {
    console.log('from router', req.idFromToken);
    console.log("req.user",req.userFromToken);
    return res.status(200).json(sendToken(req.userFromToken, res)); 
})

// update user
router.put('/update', isLoged, (req, res) => {
    console.log("req.body",req.body)
    User.findByIdAndUpdate(req.idFromToken, req.body, {new:true}).exec((error, user) => {
        console.log(user);
        if(error || !user) return res.json('something wrong'); 
        if(req.body.password) user.password = req.body.password;
        user.save();
        return res.status(200).json(user);
    }) 
})

// logout
router.get('/logout', (req, res) => {
    res.clearCookie("token");
    res.status(200);
})

module.exports = router;