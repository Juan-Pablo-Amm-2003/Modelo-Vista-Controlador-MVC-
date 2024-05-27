"use strict";
const express = require("express");
const {crearUsuario} = require("../models/crearUsuario.js")
const path = require("path");
const {mensajeError} = require("../views/mensajeError.js")
// Crear una instancia del router
const router = express.Router();

// Definir la ruta POST para crear un nuevo usuario
const creacionUsuario = router.post("/usuario", async (req, res) => {
    // Crear un nuevo objeto de usuario desde el cuerpo de la solicitud
    const nuevoUsuario = {
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        cuit: req.body.cuit,
    };

    // Escribir el nuevo usuario en la base de datos (o cualquier almacenamiento)
    try {await crearUsuario(nuevoUsuario);

    // Enviar una respuesta de éxito
    res.status(201).sendFile(path.resolve("public", "exitoDeCracion.html"))
    }catch(error){
        res.status(400).send(mensajeError(req.body.cuit))
    }
});

// Exportar el router para ser utilizado en otras partes de la aplicación
module.exports = { creacionUsuario };
