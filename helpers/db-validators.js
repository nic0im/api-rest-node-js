const Role = require('../models/role')
const Usuario = require("../models/usuario");




const validarRol = async (rol='') => {
    
    const existeRole = await Role.findOne({rol});
    
    if(!existeRole) {
        throw new Error(`El rol "${rol}" no esta registrado en la base de datos`)}
}


//*Verificar si el correo ya existe

    const existeCorreo = async (correo) =>  {

    const existecorreo = await Usuario.findOne({correo})

    if(existecorreo){
        throw new Error(`El correo ${correo}, ya se encuentra registrado`)}
}

const existeUserPorId = async(id) => {

    const user = await Usuario.findById(id);
    
    if(!user){
        throw new Error('No existe usuario con ese id')
    }

}


module.exports={validarRol, existeCorreo, existeUserPorId}