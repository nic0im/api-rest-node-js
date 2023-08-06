
const { request, response} = require("express");
const Usuario = require("../models/usuario");

const bcrypt = require('bcryptjs');


const getUsuarios = async(req, res= response) => {
    usuarios = await Usuario.find();

    res.json({
        msg:"Usuarios registrados:",
        usuarios
    })
}


const postUsuario = async(req = request, res = response)  =>  {

   const { nombre, correo, password, rol } = req.body;

   const usuario = new Usuario({rol, password, correo, nombre})

    //*Encriptacion de la contraseña:
    const salt = bcrypt.genSaltSync();

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




const putUsuario = async (req = request, res = response) => {
    
    const {id} = req.params;

    const {_id, correo, password, rol, ...resto} = req.body;

    if(password){
        //*Encriptacion de la contraseña:
        const salt = bcrypt.genSaltSync();
        resto.password= bcrypt.hashSync(password, salt)
    }
    

    const usuario = await Usuario.findByIdAndUpdate( id, resto, { new: true } )
    
    res.json(usuario)


};

const deleteUsuario = async( req = request, res = response ) => {
    const {id} = req.params;

    const usuario = await Usuario.findByIdAndUpdate( id, {estado: false}, { new: true } )

    res.json(usuario)
};


module.exports={
    postUsuario,
    getUsuarios,
    putUsuario,
    deleteUsuario
}
