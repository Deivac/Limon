"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
var valorEnPesos = readlineSync.questionFloat("Ingrese el monto en pesos: ");
console.log("Retorna el valor en dolares: ", valorEnPesos / 380);
