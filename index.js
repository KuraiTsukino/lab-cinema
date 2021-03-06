// 1. Importaciones.
const express = require("express")
const app = express()
const hbs = require("hbs")
const connectDB = require("./config/db")

require("dotenv").config()

// 2. Middlewares.
app.set("views", __dirname + "/views")
app.set("view engine", "hbs")

app. use(express.static('public'))

hbs.registerPartials(__dirname + "views/partials")

connectDB()

// 3. Rutas.
app.use("/movies", require("./routes/movies"))
app.use("/", require("./routes/index"))


// 4. Servidor.
app.listen(process.env.PORT, () => {
    console.log (`Servidor activado en el puerto http://localhost:${process.env.PORT}`)
})