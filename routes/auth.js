const express = require("express");
const router = express.Router();

const { validarCampos } = require("../middlewares/validarCampos");
const { login } = require("../controllers/auth");
const { check } = require("express-validator");


router.post("/",[
    check("correo","El correo es obligatorio").isEmail(),
    check("password","La clave es obligatoria").notEmpty(),
    validarCampos
], login);

module.exports= router;