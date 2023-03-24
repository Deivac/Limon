"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
var precioProducto = readlineSync.questionInt("Valor del producto: ");
console.log("Precio final con 10% off: ", precioProducto * 0.9);
