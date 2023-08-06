const express = require("express");
const router = express.Router();

const { getUsuarios, postUsuario, putUsuario, deleteUsuario } = require("../controllers/usuarios");


router.get("/", getUsuarios);
router.post("/", postUsuario);
router.put("/:id",putUsuario)
router.delete("/:id",deleteUsuario)


module.exports = router;