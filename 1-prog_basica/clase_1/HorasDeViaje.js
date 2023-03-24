"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
var distancia = readlineSync.questionFloat("Ingrese la distancia que resta: ");
console.log("Aún le quedan ", distancia / 110, "hs de viaje.");
