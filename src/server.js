"use strict";
const express = require("express");
const { creacionUsuario } = require("./controllers/creacionUsuario");
const app = express();
const PORT = 8080;


app.use(express.json());
app.use(express.static("public"));
app.use(express.urlencoded({extended : false}))

app.use(creacionUsuario)


app.listen(PORT, ()=> console.log("server corriendo en el puerto: ", PORT));
