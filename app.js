const express = require("express");

const app = express();

app.get("/", (req, res)=>{
    res.send("Hola Mundo :)");
});

app.listen(8000, ()=>{
    console.log("Servidor Corriendo en el Puerto", 8000);
});