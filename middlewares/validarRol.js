const {request, response} = require('express');

const validarRolAdmin = (req=request, res, next) => {

   const usuarioAuntenticado = req.usuarioAuntenticado

   if(!usuarioAuntenticado){
    return res.status(500).json({
        msg: 'Se requiere validar el token antes de validar el rol'});
   }

   if(usuarioAuntenticado.rol !== 'ADMIN_ROLE'){
    return res.status(403).json({
        msg:'No cuentas con los permisos necesarios para realizar esta accion'})
   }

   next()

}


module.exports={validarRolAdmin};