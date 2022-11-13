const { json } = require("express")
const express = require("express")
const { getJSON } = require("jquery")
const router = express.Router()

//importar modelo
const User = require("../models/product.user")

//listar productos
router.get("/get-user", async (req, res) => {

    //let result = req.query.input1

    let { email, password } = req.query

    req.body.email = email
    req.body.password = password
    //console.log(req.query)

    //obtenber los usuarios que tienen ese email
    let userExists = await User.find({email: {$eq: email}}) // [], [lhsjdlsahjds, dslkahdsaudsa]
    let modelUser = userExists[0]
    
    //validar si el email existe
    if (userExists.length === 0) {
        //console.log('usuario no exite')
        return res.json({ msg: 'usuario no exite'})
    }
    //validar si el password
    if (modelUser.password !== password) {
        //console.log('usuario no exite')
        return res.json({ msg: 'Incorrect password'})
    }

    return res.status(200).json({ data: userExists})

})  

//crear producto
router.post("/create-user", async (req, res) => {

    
    let { email } = req.body
    //let email = req.body.email

    email = email.toLowerCase()
    req.body.email = email

    //obtenber los usuarios que tienen ese email
    let userExists = await User.find({email: {$eq: email}}) // [], [lhsjdlsahjds, dslkahdsaudsa]
    console.log(userExists)
 
    //validar si el email existe
    if (userExists.length !== 0) {
        return res.json({msg: "El usuario ya existe"})
    }
    
    const newUser = new User(req.body)
    await newUser.save()

    return res.status(201).json({msg: "Usuario creado correctamente"})
    ///////////////////////////////

/*     const products = await Product.find()
    /* console.log(products)//mongo
    console.log("------------------------")
    console.log(req.body)//local
    console.log("------------------------") 
    
    for(let local_database of products ){
        if(req.body.email === local_database.email){
            return  res.json({msg: "Email Extistente"})
        }
    } 

    const newProduct = new Product(req.body)
    await newProduct.save()
    return res.status(201).json({msg: "User guardado exitosamente"}) */

  
})

module.exports = router
 