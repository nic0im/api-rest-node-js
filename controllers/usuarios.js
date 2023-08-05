
const { request, response} = require("express");
const Usuario = require("../models/usuario");


const putUsuario = async(req = request, res = response)  =>  {

   const {nombre, correo, password, rol } = req.body;

   const usuario = new Usuario({rol, password, correo, nombre})

   try{
        await usuario.save()
        console.log("Usuario creado")

         res.json({
             msg:"Usuario creado",
            usuario
    })

   }catch(err){
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



module.exports={
    putUsuario,
    getUsuarios
}