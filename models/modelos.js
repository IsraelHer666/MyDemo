//Importamos las utilidades
import Sequelize from "sequelize"; //npm Sequelize
import sequelize from "/Sequelize/util/DB";     //Importamos la conexion
const Usuario = sequelize.define("Usuario",{ //Creamos el modelo
    //Creamos los campos
    id:{
        type: Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    Nombre:{
        type:Sequelize.STRING,
        allowNull:false
    },
    Apellido:{
        type:Sequelize.STRING,
        allowNull:false
    },
    Telefono:{
        type:Sequelize.STRING,
        allowNull:false
    },
    Ciudad:{
        type:Sequelize.STRING,
        allowNull:false
    },
    Estado:{
        type:Sequelize.STRING,
        allowNull:false
    },
    CodigoPostal:{
        type:Sequelize.NUMBER,
        allowNull:false
    }
});
module.exports = Usuario;
/*
por lo que esta constante en la que defino, almaceno el modelo
definido, esto se exporta aquí.
*/