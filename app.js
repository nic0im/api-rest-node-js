const express = require('express');

const {conectarDB} = require("./config/dbConfig")

const usuariosRoutes = require("./routes/usuarios")

require('dotenv').config()


const app = express(); 


//* Middlewares
app.use(express.json())

app.use("/usuarios", usuariosRoutes)


app.listen(3000,()=>{
    console.log("Server running on port 3000")
})


conectarDB()
