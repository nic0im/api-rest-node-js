
const { request, response } = require('express');
const { subirArchivo } = require('../helpers');

const Usuario = require('../models/usuario');
const { model } = require('mongoose');
const path = require('path')
const fs = require('fs')


const cargarArchivo = async ( req, res = response) => {


    try{

        const nombre =  await subirArchivo(req.files, ['jpg','png','jpeg'], 'archivos');

            res.json({nombre})

        } 
    catch (err) {

        console.log(err)
        res.status(400).json({err})}
  
}

const actualizarImagen = async (req= request, res = response) => {

    const {id, coleccion} = req.params;

    let modelo;

    switch ( coleccion ) {
        case'usuarios':
            modelo = await Usuario.findById(id);
            
            if(!modelo){
                res.status(400).json({
                    msg: `No existe usuario con id ${id}`
                });
            }

        break;

        default:
            return res.status(500).json({msg: 'forbidden colecction'})
    }

    
    //Limpiar imagenes previas

    if ( modelo.img ) {
        //borrar la img del servidor
        const imgPath = path.join(__dirname, '../uploads', coleccion, modelo.img);
        console.log(imgPath)
        if(fs.existsSync(imgPath)){
            fs.unlinkSync(imgPath)
        }
    }

    //Establecer nombre de imagen en propiedad del modelo usuario
    const nombre =  await subirArchivo(req.files, undefined, coleccion);
    modelo.img = nombre;

    await modelo.save();

    res.json(modelo)
}


const mostrarImagen = async (req, res= response) => {

    const {id, coleccion} = req.params;

    let modelo;

    switch ( coleccion ) {
        case'usuarios':
            modelo = await Usuario.findById(id);
            
            if(!modelo){
                res.status(400).json({
                    msg: `No existe usuario con id ${id}`
                });
            }

        break;

        default:
            return res.status(500).json({msg: 'forbidden colecction'})
    }

    
    //Limpiar imagenes previas

    if ( modelo.img ) {
        //borrar la img del servidor
        const imgPath = path.join(__dirname, '../uploads', coleccion, modelo.img);
   
        if(fs.existsSync(imgPath)){
            return res.sendFile(imgPath)
        }
    }

    const noImgPath = path.join(__dirname, '../assets/no-image.jpg');

    return res.sendFile(noImgPath)
}

module.exports={
    cargarArchivo,
    actualizarImagen,
    mostrarImagen
}