"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rls = require("readline-sync");
var clave;
for (var contador = 1; contador <= 3; contador++) {
    clave = rls.question("Ingresar clave: ");
    if (clave == "eureka") {
        console.log("contraseña correcta");
        break;
    }
    else {
        console.log("contraseña incorrecta");
    }
}
