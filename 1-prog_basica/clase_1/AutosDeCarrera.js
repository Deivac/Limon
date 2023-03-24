"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rls = require("readline-sync");
var tiempoDeVuelta1 = rls.questionFloat("Tiempo de Vuelta 1: ");
var tiempoDeVuelta2 = rls.questionFloat("Tiempo de Vuelta 2: ");
var tiempoDeVuelta3 = rls.questionFloat("Tiempo de Vuelta 3: ");
var tiempoDeVuelta4 = rls.questionFloat("Tiempo de Vuelta 4: ");
var tiempoPromedio = ((tiempoDeVuelta1 + tiempoDeVuelta2 + tiempoDeVuelta3 + tiempoDeVuelta4) / 4);
console.log("Tiempo promedio: ", tiempoPromedio);
