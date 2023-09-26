import express from"express";
const app = express()
const port = 3000;
import {dirname} from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));




app.get("/",(req,res)=>{
    res.sendFile(__dirname + "/html/Index.html")
})








app.listen(port,()=>{ //Se define el puerto donde estaremos escuchando peticiones desde el lado del cliente 
    console.log(`the server is running on the ${port} port`)  //callback
})
