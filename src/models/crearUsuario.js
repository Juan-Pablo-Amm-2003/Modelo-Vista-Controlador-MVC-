const { leerUsuarios } = require("../utils/leerUsuarios");
const { escribirUsuarios } = require("../utils/escribirUsuarios.js");


async function crearUsuario(nuevoUsuario) {
    // Leer la lista de usuarios existente
    const usuarios = await leerUsuarios();

    // Bucle para identificar cuits repetidos
    if (usuarios.find(usuario => usuario.cuit === nuevoUsuario.cuit)) {
        throw new Error("Usuario Existente");
    }

    // Agregar el nuevo usuario a la lista
    usuarios.push(nuevoUsuario);

    // Escribir la lista actualizada de usuarios
    await escribirUsuarios(usuarios);
}

module.exports = { crearUsuario };
