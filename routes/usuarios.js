//Imports
const express = require("express");
const { check } = require("express-validator");

//Middleware imports
const { validarCampos } = require("../middlewares/validarCampos");
const { validarJwt } = require("../middlewares/validar-jwt");
const { validarRolAdmin } = require("../middlewares/validarRol");

//Controllers imports
const { getUsuarios, postUsuario, putUsuario, deleteUsuario } = require("../controllers/usuarios");

//Helpers imports
const { validarRol, existeCorreo, existeUserPorId } = require("../helpers/db-validators");



const router = express.Router();

//Routes
router.get("/", getUsuarios);

router.post("/",[
    check("nombre","El Nombre no debe estar vacio").not().isEmpty(),
    check("password","La contraseña debe ser de mayor a 6 caracteres").isLength({min: 6}),
    check("correo","El email no es valido").isEmail(),
    //check("rol","el rol no es valido").isIn(['USER_ROLE','ADMIN_ROLE']),
    check('rol').custom(validarRol),
    check('correo').custom(existeCorreo),
    validarCampos
],postUsuario);

router.put("/:id",[
    validarJwt,
    check('id', "El campo id no es un mongo id valido").isMongoId(),
    check('id').custom(existeUserPorId),
    check('rol').custom(validarRol),
    validarCampos
],putUsuario)

router.delete("/:id",[
    validarJwt,
    validarRolAdmin,
    check('id', "El campo id no es un mongo id valido").isMongoId(),
    check('id').custom(existeUserPorId),
    validarCampos
],deleteUsuario)


module.exports = router;