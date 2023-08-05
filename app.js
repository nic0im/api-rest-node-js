const express = require('express');

const {conectarDB} = require("./config/dbConfig")

const {putUsuario, getUsuarios} = require("./controllers/usuarios")

require('dotenv').config()


const app = express(); 


//* Middlewares
app.use(express.json())


app.post("/register",putUsuario)

app.get("/users",getUsuarios)




app.listen(3000,()=>{
    console.log("Server running on port 3000")
})


conectarDB()
