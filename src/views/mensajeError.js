const { Module } = require("module");

function mensajeError(cuit){
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Cuit repetido</title>
    </head>
    <style>
        h1{
            font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
            font-size: 3rem;
            color: green;
        }
        body{
            background-color: black;
        }
    </style>
    <body>
        <h1>!EL cuit: ${cuit} YA EXISTE¡</h1>
    </body>
    </html>
    `;


}

module.exports = {mensajeError}