// 1 importar mongoose
const mongoose = require("mongoose")

//schema -> colección
//firstName, lastName, email, password, isAdmin - true || false
// 2 llamar a la clase Schema
const { Schema } = mongoose
// 3 crear el schema de lo que yo necesite - instaciar

const productSchema = new Schema(
    {
        firstName: { type: String, required: true},
        lastName: { type: String, required: true},
        email: { type: String, required: true}, // las llaves de lacollecion
        password: { type: String, required: true},
        isAdmin: { type: Boolean, default: false },
    },
    {
        versionKey: false, // que deseamos capturar cada que se inserte un dato
        timestamps: true
    }
)

// 4 exportar como un modelo
//module.exports = mongoose.model("nombre collección", el schema de la coleccion)

module.exports = mongoose.model("user", productSchema)

/*

    {
        "firstName": ""
        "lastName": "",
        "email": "",
        "password": "",
        "isAdmin": "",
    }
    
*/