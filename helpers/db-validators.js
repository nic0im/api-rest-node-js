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

//Validar colecciones permitidas
const coleccionesPermitidas = (coleccion = '', colecciones = [] ) => {

    const incluida = colecciones.includes(coleccion);

    if(!incluida){
        throw new Error(`La colección ${coleccion} no es permitida, ${colecciones}`)
    }
    return true;
}


module.exports={validarRol, existeCorreo, existeUserPorId,coleccionesPermitidas}