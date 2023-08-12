
const { request, response} = require("express");
const Usuario = require("../models/usuario");



const bcrypt = require('bcryptjs');


const getUsuarios = async(req, res= response) => {

    const { limite = 5, desde = 0 } = req.query;

    const [total, usuarios]= await Promise.all([
        Usuario.countDocuments({estado:true}),
        Usuario.find({estado:true})
        .skip(desde)
        .limit(Number(limite))
    ])

    res.json({
        total,
        usuarios
    })
}


const postUsuario = async(req = request, res = response)  =>  {

   const { nombre, correo, password, rol } = req.body;

   const usuario = new Usuario({rol, password, correo, nombre})

    
    //*Encriptacion de la contraseña:
    const salt = bcrypt.genSaltSync();
    usuario.password= bcrypt.hashSync(password, salt)
   
    
   try{
        await usuario.save()
        console.log("Usuario creado")

         res.json({
             msg:"Usuario creado",
            usuario
    })

   }catch(err){

    console.log(err)

    res.json({
        msg:err
    })}
}




const putUsuario = async (req = request, res = response) => {
    
    const { id } = req.params;

    const { _id, correo, password, rol, ...resto} = req.body;

    if( password ) {

        //*Encriptacion de la contraseña:
        const salt = bcrypt.genSaltSync();
        resto.password= bcrypt.hashSync(password, salt)
    }
    

    const usuario = await Usuario.findByIdAndUpdate( id, resto, { new: true } )
    
    res.json(usuario)


};

const deleteUsuario = async( req = request, res = response ) => {

    const {id} = req.params;

    //Este usuarioAutenticado se extrajo del payload del token y se asigno a una nueva propiedad llamada "uid" de la request, 
    //corresponde al id del usuario autenticado.
    const usuarioAuntenticado = req.usuarioAuntenticado;

    const usuario = await Usuario.findByIdAndUpdate( id, {estado: false}, { new: true } )

    res.json({usuario, usuarioAuntenticado})
};


module.exports={
    postUsuario,
    getUsuarios,
    putUsuario,
    deleteUsuario
}
