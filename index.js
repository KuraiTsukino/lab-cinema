// 1. Importaciones.
const express = require("express")
const app = express()
const hbs = require("hbs")
const connectDB = require("./config/db")

require("dotenv").config()

// 2. Middlewares.
app.set("views", __dirname + "/views")
app.set("view engine", "hbs")

hbs.registerPartials(__dirname + "views/partials")

connectDB()

// 3. Rutas.

// 4. Servidor.
app.listen(process.env.PORT, () => {
    console.log (`Servidor activado en el puerto http://localhost:${process.env.PORT}`)
})