const {Router} = require("express");
const router = Router();

const { validarCampos, validarArchivoSubir } = require("../middlewares");
const { check } = require("express-validator");

const { cargarArchivo, mostrarImagen, actualizarImagenCloudinary, actualizarImagen } = require("../controllers/uploads");
const { coleccionesPermitidas } = require("../helpers");



router.post("/", cargarArchivo);

router.put('/:coleccion/:id', [
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