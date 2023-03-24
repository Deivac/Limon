"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rls = require("readline-sync");
var num1 = rls.questionInt('Ingrese el numero de la tabla que desea: ');
var num2 = rls.questionInt('Ingresar hasta que numero desea saber: ');
var resultado = 0;
for (var contador = 1; contador <= num2; contador++) {
    resultado = num1 * contador;
    console.log(num1, "x", contador, "=", resultado);
}
