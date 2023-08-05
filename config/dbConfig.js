const mongoose = require('mongoose');

const conectarDB = async () => {

    try{
        await mongoose.connect(process.env.mongoDBcnn);
        console.log("Conectado a la base de datos")
    } catch(err){
        console.log(err)
    }
   
}

module.exports={
    conectarDB
}