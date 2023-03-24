"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
var altura = readlineSync.questionFloat("Ingrese la Altura: ");
var peso = readlineSync.questionFloat("Ingrese el Peso: ");
console.log("IMC: ", peso / (altura ^ 2));
