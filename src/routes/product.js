const express = require("express")
const router = express.Router()


//importar modelo
const Product = require("../models/product.model")


//crear producto
router.post("/create-product", async (req, res) => {

    const newProduct = new Product(req.body)
    await newProduct.save()
    return res.status(201).json({msg: "Producto guardado exitosamente"})
})

//eliminar producto
router.delete("/delete-product", async (req, res) => {

    await Product.findByIdAndDelete(req.query.id)
    return res.status(200).json({msg: "Producto eliminado", id : req.query.id})
})

//actualizar producto
router.put("/update-product", async (req, res) => {

    await Product.findByIdAndUpdate(req.query.id, {$set: req.body})
    return res.status(200).json({msg: "Producto actulizado", id : req.query.id})
})

//listar productos
router.get("/get-product", async (req, res) => {

    const products = await Product.find()
    return res.status(200).json({data: products})

})

//exportar las rutas
module.exports = router
