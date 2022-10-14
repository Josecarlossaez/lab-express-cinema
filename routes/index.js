const express = require('express');
const router = express.Router();
const Movies = require("../models/movie.model.js")

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

router.get("/movies", (req,res,next) => {
    Movies.find()
    
    .then((response) => {
        console.log(response)
        res.render("movies.hbs", {
            listMovies : response
        })
    })
    .catch((err) =>{
        console.log(err)
    })
})

module.exports = router;
