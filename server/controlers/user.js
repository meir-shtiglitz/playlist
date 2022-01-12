const jwt = require("jsonwebtoken");
const Category = require("../models/categories");
const User = require("../models/user");

// create token function
exports.sendToken = (user, res) => {
    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);
    res.cookie("token", token, { expire: new Date() + 9999 });
    const { _id, username, email } = user;
    return { token, user: { _id, username, email } };
}

// checked if the user is loged by token
exports.isLoged = (req, res, next) => {
    console.log("from isLoged", req.headers.authorization);
    const id = jwt.decode(req.headers.authorization, process.env.JWT_SECRET);
    if(!id) return res.json("you have to login");
    req.idFromToken = id._id;
    User.findById(req.idFromToken).exec((error, user) => {
        if(error || !user) return res.json('your token is expired');
        req.userFromToken = user; 
        next();
    }) 
   
}

// checked if the user is the admin of this category
exports.isAdmin = (req, res, next) => {
    // get the id from query body or params
    const id = req.query._id ? req.query._id : req.body._id ? req.body._id : req.params._id;
    console.log("cat id from is admin", id);
    Category.findById(id).exec((error, cat) => {
        console.log("cat from isAdmin", cat.userID);
        console.log("idFromToken from isAdmin", req.idFromToken);
        if(!cat || error) return res.json('category did not find');
        if(cat.userID !== req.idFromToken) return res.json("you don't have the access to this act");
        next();
    })
}

