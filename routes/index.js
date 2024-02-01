//importaciones
const express = require("express");
const router = express.Router();
const path = require("path");
//Ruta main
const rootDir = require("../util/path")

//router 

router.get("/contacto",(req,res)=>{
    res.sendFile(path.join(rootDir,"views","Contacto.html"));   
})
router.get("/signin",(req,res)=>{
    res.sendFile(path.join(rootDir,"views","SignIn.html"));   
})

router.post("/Procesado",(req,res)=>{
    console.log(req.body);
    res.sendFile(path.join(rootDir,"views","Procesado.html"));
})



module.exports = router;