const {request, response} = require('express');
const jwt = require('jsonwebtoken');
const usuario = require('../models/usuario');


const validarJwt = async(req= request, res= response, next) => {

    const token = req.header('x-token');

    if(!token){
        return res.json({
            msg: "Must include a token"
        });
    }

    try{

        const {uid} = jwt.verify(token, process.env.secretOrPrivateKey)
        
        //Creamos una propiedad al obj request para usarlo en los controladores.
        req.usuarioAuntenticado = await usuario.findById(uid);

        next();

    } catch (err) {

        res.status(401).json({
            msg: 'Token no valido'
        })
    }

    

};


module.exports = {
    validarJwt
};