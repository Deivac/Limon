"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
// comentario tipo : numero = combierto en numero el programa, xq la question que es string,
var alturaRectangulo = readlineSync.questionInt("Ingrese altura del rectangulo: ");
var baseRectangulo = readlineSync.questionInt("Ingrese base del rectangulo: ");
var areaDelRectangulo = alturaRectangulo * baseRectangulo;
console.log("El área del rectnagulo es: ", areaDelRectangulo);
