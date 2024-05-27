"use strict";
const fs = require("fs/promises");
const path = require("path");

/**
 *  
 * @returns   {promises<{ nombre: sring;
*              apellido: string;
*                cuit:string} []}
 */


async function leerUsuarios() {
    const pathDb = path.resolve("db", "usuarios.json");

    // Leer el archivo de usuarios
    const data = await fs.readFile(pathDb, "utf8");

    // Parsear el contenido del archivo como JSON
    return JSON.parse(data);
}

module.exports = { leerUsuarios };
