const express = require("express");
const router = express.Router();

const { getUsuarios, postUsuario } = require("../controllers/usuarios");


router.get("/", getUsuarios);
router.post("/", postUsuario);


module.exports = router;