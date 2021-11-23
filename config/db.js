// 1. Importaciones

const mongoose = require("mongoose")
const connectDB = async () => {
    await mongoose.connect("mongodb://localhost:27017/lab-cinema", {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })

    console.log("Base de datos conectada")
}

module.exports = connectDB