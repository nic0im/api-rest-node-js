const express = require('express');

const {conectarDB} = require("./config/dbConfig")

const usuariosRoutes = require("./routes/usuarios");
const loginRoute = require("./routes/auth")

require('dotenv').config()


const app = express(); 


//* Middlewares
app.use(express.json())

app.use("/usuarios", usuariosRoutes)
app.use("/login", loginRoute)


app.listen(3001,()=>{
    console.log("Server running on port 3000")
})


conectarDB()
