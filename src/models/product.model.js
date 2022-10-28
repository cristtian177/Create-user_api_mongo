// 1 importar mongoose
const mongoose = require("mongoose")

//schema -> colección

// 2 llamar a la clase Schema
const { Schema } = mongoose
// 3 crear el schema de lo que yo necesite - instaciar

const productSchema = new Schema(
    {
        name: { type: String, required: true},
        price: { type: Number, required: true},
        description: { type: String, default: "El vendedor no ha añadido una descripción"}, // las llaves de lacollecion
        image: { type: String, default: "Sin imagen adjunta"},
        stock: { type: Number, default: 0},
        keyWords: { type: Array, default: []},
    },
    {
        versionKey: false, // que deseamos capturar cada que se inserte un dato
        timestamps: true
    }
)

// 4 exportar como un modelo
//module.exports = mongoose.model("nombre collección", el schema de la coleccion)
module.exports = mongoose.model("product", productSchema)