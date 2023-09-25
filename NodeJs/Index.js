const fs=require("fs");
fs.writeFile("messi2.txt","Este es mi contenido",(err) => { //El metodo writeFile nos permite crear un archivo
  //writeFile("nombre del archivo,contenido, callback")lo recibe en string
  if (err) throw err;
  console.log('successfully deleted /tmp/hello');
});
