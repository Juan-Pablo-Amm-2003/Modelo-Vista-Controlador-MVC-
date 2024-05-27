"use strict";
const fs = require("fs/promises");
const path = require("path");


/**
 * 
 * @returns {{nombre: string; apellido: string[]}}
 * 
 */

async function leerUsuarios() {
    const pathDb = path.resolve("db", "usuarios.json")
    const usuariosBuffer = await fs.readFile(pathDb);
    const usuariosStr = usuariosBuffer.toString();
    const usuariosObj = JSON.parse(usuariosStr);


    return usuariosObj;
}
module.exports = {leerUsuarios};
