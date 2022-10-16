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
        next(err)
    })
})

router.get("/movie/:movieId" , (req, res, next) => {
    
    const {movieId} = req.params
    Movies.findById(movieId)
    .then((response) => {
        let horarios = response.showtimes.toString().replace(/,/g,"  |  ")
        response.showtimes = horarios
        console.log(response)
        res.render("details.hbs", {
            
            details : response

        })
    })   

    .catch((err) => {
        next(err)
    })
})

module.exports = router;
