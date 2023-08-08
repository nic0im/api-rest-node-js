const express = require("express");
const router = express.Router();

const { check } = require("express-validator");

const { getUsuarios, postUsuario, putUsuario, deleteUsuario } = require("../controllers/usuarios");
const { validarCampos } = require("../middlewares/validarCampos");
const { validarRol } = require("../helpers/db-validators");



router.get("/", getUsuarios);

router.post("/",[
    check("nombre","El Nombre no debe estar vacio").not().isEmpty(),
    check("password","La contraseña debe ser de mayor a 6 caracteres").isLength({min: 6}),
    check("correo","El email no es valido").isEmail(),
    //check("rol","el rol no es valido").isIn(['USER_ROLE','ADMIN_ROLE']),
    check('rol').custom(validarRol),
    validarCampos
],postUsuario);

router.put("/:id",putUsuario)

router.delete("/:id",deleteUsuario)


module.exports = router;