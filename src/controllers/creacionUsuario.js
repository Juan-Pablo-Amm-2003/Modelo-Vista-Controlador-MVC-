"use strict";
const express = require("express");
const { leerUsuarios } = require("../models/leerUsuarios.js");
const fs = require("fs/promises");
const path = require("path");


/*necesario el router para implementar modulos con express */
const router = express.Router();


const creacionUsuario = router.post("/usuario", async (req, res) => {
    const usuarios = await leerUsuarios();
    
    const nuevoUsuario = {
        nombre : req.body.nombre,
        apellido: req.body.apellido
    };

    usuarios.push(nuevoUsuario);

    const pathDb = path.resolve("db", "usuarios.json");

    const usuarioStr = JSON.stringify(usuarios)

    await fs.writeFile(pathDb, usuarioStr);
    
    res.status(200).json({ succes: true });
});
module.exports = {creacionUsuario};

