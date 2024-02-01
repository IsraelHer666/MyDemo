//imports
const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const rootDir = require("./util/path");
const path = require("path");
//rutas
const index = require("./routes/index");
//variables
const port = 3000;
//sirviendo archivos estaticos.
app.use(express.static(path.join(rootDir,"public")));
//body parser
app.use(bodyParser.urlencoded({extended:false}));
//logic
app.use("/index",index);

//ruta por defecto.
app.get("/",(req,res)=>{
    res.sendFile(path.join(rootDir,"views","Index.html"))
});
//ruta 404.
app.use((req,res)=>{
    res.status(404).sendFile(path.join(rootDir,"views","errorPage.html"));
})
//server
app.listen(port,()=>{
    console.log(`Server running at ${port} port`);
});