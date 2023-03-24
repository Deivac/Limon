"use strict";
exports.__esModule = true;
var readlineSync = require("readline-sync");
var clave = "Eureka";
var cant = 1;
while (cant <= 3) {
    console.clear();
    var claveAcceso = readlineSync.question("Ingresar Pasword: ");
    if (claveAcceso == clave) {
        console.log("Logueado");
        break;
    }
    else {
        console.log("Contraseña incorrecta!! Vuelve a intentarlo.");
        readlineSync.keyInPause("Presiona cualquier tecla para continuar.");
        cant++;
    }
}
if (cant == 4) {
    console.clear();
    console.log("Acceso DENEGADO!");
}
