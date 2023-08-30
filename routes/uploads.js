const {Router} = require("express");
const router = Router();

const { validarCampos, validarArchivoSubir, validarJwt } = require("../middlewares");
const { check } = require("express-validator");

const { cargarArchivo, mostrarImagen, actualizarImagenCloudinary, actualizarImagen } = require("../controllers/uploads");
const { coleccionesPermitidas, validarRol } = require("../helpers");



router.post("/", [
    validarJwt,
   validarCampos
],cargarArchivo);

router.put('/:coleccion/:id', [
    validarJwt,
    validarArchivoSubir,
    check('id','El id debe ser de mongo').isMongoId(),
    check('coleccion').custom(c=> coleccionesPermitidas(c,['usuarios'])),
    validarCampos
], actualizarImagen)

router.get('/:coleccion/:id',[
    check('id','El id debe ser de mongo').isMongoId(),
    check('coleccion').custom( c => coleccionesPermitidas( c , ['usuarios'])),
    validarCampos], mostrarImagen)
module.exports= router;