const express = require("express")
const router = express.Router()

//importar modelo
const Product = require("../models/product.user")

//listar productos
router.get("/get-user", async (req, res) => {

    const products = await Product.find()
    return res.status(200).json({data: products})

}) 

//crear producto
router.post("/create-user", async (req, res) => {

    const products = await Product.find()
    /* console.log(products)//mongo
    console.log("------------------------")
    console.log(req.body)//local
    console.log("------------------------") */
    
    for(let local_database of products ){
        if(req.body.email === local_database.email){
            return  res.json({msg: "Email Extistente"})
        }
    } 

    const newProduct = new Product(req.body)
    await newProduct.save()
    return res.status(201).json({msg: "User guardado exitosamente"})
})

module.exports = router
