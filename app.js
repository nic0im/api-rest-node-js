const express = require('express');

const {conectarDB} = require("./config/dbConfig")

const fileUpload = require('express-fileupload');

const usuariosRoutes = require("./routes/usuarios");
const loginRoute = require("./routes/auth");
const uploadsRoute = require("./routes/uploads");



require('dotenv').config()


const app = express(); 


//* Middlewares
app.use(express.json())

//File upload
app.use(fileUpload({
    useTempFiles : true,
    tempFileDir : '/tmp/'
}));


app.use("/usuarios", usuariosRoutes)
app.use("/login", loginRoute)
app.use("/uploads", uploadsRoute )




app.listen(3001,()=>{
    console.log("Server running on port 3000")
})


conectarDB()
