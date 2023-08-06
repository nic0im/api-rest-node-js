
const { request, response} = require("express");
const Usuario = require("../models/usuario");

const bcrypt = require('bcryptjs');



const postUsuario = async(req = request, res = response)  =>  {

   const { nombre, correo, password, rol } = req.body;

   const usuario = new Usuario({rol, password, correo, nombre})

    //*Encriptacion de la contraseña:
    const salt = bcrypt.genSaltSync(10);

    usuario.password= bcrypt.hashSync(password, salt)
   

   try{
        await usuario.save()
        console.log("Usuario creado")

         res.json({
             msg:"Usuario creado",
            usuario
    })

   }catch(err){

    console.log(err)

    res.json({
        msg:err
    })}
}


const getUsuarios = async(req, res= response) => {
    usuarios = await Usuario.find();

    res.json({
        msg:"Usuarios registrados:",
        usuarios
    })
}

const getUsuario = ()   =>  {};

const updateUsuario= () =>  {};

const deleteUsuario= () =>  {};


module.exports={
    postUsuario,
    getUsuarios
}