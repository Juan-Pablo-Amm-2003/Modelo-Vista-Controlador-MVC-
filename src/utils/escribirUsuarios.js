"use strict";
const fs = require("fs/promises");
const path = require("path");

async function escribirUsuarios(usuarios) {
    const pathDb = path.resolve("db", "usuarios.json");

    // Convertir la lista de usuarios a una cadena JSON
    const usuarioStr = JSON.stringify(usuarios, null, 2);

    // Escribir la cadena JSON en el archivo
    await fs.writeFile(pathDb, usuarioStr);
}

module.exports = { escribirUsuarios };
