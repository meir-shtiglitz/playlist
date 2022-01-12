const express = require("express");
const { isLoged, isAdmin } = require("../controlers/user");
const Category = require("../models/categories");
const router = express.Router();

// adding a new category
router.post('/add', isLoged, (req, res) => {
    console.log("req.body",req.body);
    const data = {...req.body, userID: req.idFromToken};
    delete data._id;
    console.log(data);
    const newCat = new Category(data);
    newCat.save(()=>{
        console.log(newCat);
        return res.status(200).json(newCat);
    })
})

// get all categories of the user
router.get('/get', isLoged, (req, res) => {
    console.log("from get categories route",req.idFromToken);
    Category.find({userID: req.idFromToken}).exec((error, cats) => {
        if(!cats || error) return res.json('we did not find categories');
        console.log(cats);
        res.json(cats)
    })
})

// delete a category
router.delete('/delete/:_id', isLoged, isAdmin, (req, res) => {
    const id = req.params._id;
    console.log("req.params from delete route",req.params);
    Category.findByIdAndDelete(id).exec(()=>{
        console.log("deleted...");
        return res.json('deleted...')
    });

})

// update a category
router.put('/update', isLoged, isAdmin, (req, res) => {
    console.log("req.body",req.body)
    const id = req.query._id ? req.query._id : req.body._id;
    const {title, description} = req.body;
    Category.findByIdAndUpdate(id).exec((error, cat) => {
        console.log("cat from update", cat);
        cat.title = title;
        cat.description = description;
        cat.save();
        return res.json(cat)
    });

})

module.exports = router;