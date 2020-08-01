// Requires
const fs = require('fs');
const { rejects } = require('assert');
var colors = require("colors");

let listarTabla = (base, limite = 10) => {
    for (let i = 1; i <= limite; i++) {
        contenido = `${base} * ${i} = ` + base * i;
        console.log(contenido);
    }
}


let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        let contenido = '';
        if (!Number(base)) {
            reject(`${base} no es un numero`);
        }
        for (let index = 1; index <= limite; index++) {
            contenido += `${base} * ${index} = ` + base * index + "\n";

        }
        mensaje = `tabla-${base}.txt`;
        fs.writeFile(`tablas/tabla-${base}.txt`, contenido, (err) => {

            if (err) {
                reject(err);
            } else {
                resolve('Archivo creado: ' + mensaje.green);
            }
        })
    })
}

module.exports = {
    crearArchivo,
    listarTabla
}