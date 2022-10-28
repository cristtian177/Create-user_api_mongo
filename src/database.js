const mongoose = require("mongoose")

const dbName = "bit-shop"
const uri = `mongodb+srv://cris:1234@dbcluster.91tdpvh.mongodb.net/${dbName}?retryWrites=true&w=majority`

mongoose.connect(uri)
    .then((db) => console.log("Conexion a base de datos exitosa"))
    .catch((err) => console.log(err))

module.exports = mongoose