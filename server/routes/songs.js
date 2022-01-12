const express = require("express");
const { isLoged, isAdmin } = require("../controlers/user");
const Song = require("../models/songs");
const router = express.Router();

// add a new song to a category
router.post("/add", isLoged, isAdmin, (req,res) => {
    console.log(" req.body", req.body)
    const data = {...req.body, catID: req.body._id};
    delete data._id;

    console.log("data",data)
    const newSong = new Song(data);
    newSong.save(()=>console.log(newSong));
    res.status(200).json(newSong)
})

// geting the all songs from a category
router.get("/get", isLoged, isAdmin, (req,res) => {
    console.log("req.query",req.query)
    Song.find({catID:req.query._id}).exec((error, songs) => {
        console.log("songs",songs);
        console.log("error",error);
        if(error || !songs || songs.length < 1) return res.status(400).json("there are not  songs yet");
        res.status(200).json(songs)
    })
})


// delete a song from is category
router.delete("/delete/:_id/:songID", isLoged, isAdmin, (req,res) => {
    console.log("req.params.songID",req.params.songID)
    Song.findByIdAndDelete(req.params.songID).exec(result => {
        console.log(result);
        return res.status(200).json(result);
    });
})

module.exports = router;