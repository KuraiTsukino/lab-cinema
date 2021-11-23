// 1. Importaciones.

const express = require("express")
const router = express.Router()

// 2. Rutas de la URL base

router.get("/movies/single", (req, res) => {
    res.send("Estás en la página de single movies")
})

router.get("/movies", (req, res) => {
    res.send("Estás en la página de movies")
})

router.get("/", (req, res) => {
    res.send("Estas en el home")
})


// 3. Exportaciones.

module.exports = router