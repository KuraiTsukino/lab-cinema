// 1. Importación del modelo.

const Movie = require("./../models/Movie")

exports.getAllMovies = async (req, res) => {
    
    const allMovies = await Movie.find({})

    res.render("movies/list", {
        data: allMovies
    })
}

// Búsqueda de película por ID.

exports.getMovie = async (req,res) => {

    const singleMovieID = req.params.movieID

    const getTheMovie = await Movie.findById(singleMovieID)

    console.log(getTheMovie)

    res.render("movies/single", {
        data:getTheMovie
    })
}
