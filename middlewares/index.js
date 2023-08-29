const validarCampos = require('../middlewares/validarCampos');
const validarJWT = require('../middlewares/validar-jwt');
const validarRoles = require('../middlewares/validarRol');
const validarArchivoSubir = require('../middlewares/validar-archivo');

module.exports = {
    ...validarCampos,
    ...validarJWT,
    ...validarRoles,
    ...validarArchivoSubir
}
