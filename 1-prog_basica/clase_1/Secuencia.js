"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
var primerNumero = readlineSync.questionInt("Ingrese el primer número: ");
console.log("El primer número es: ", primerNumero);
var segundoNumero = readlineSync.questionInt("Ingrese el segundo número: ");
console.log("El segundo número es: ", segundoNumero);
