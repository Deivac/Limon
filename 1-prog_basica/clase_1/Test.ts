import * as rls from 'readline-sync';

let vuelta1: number = rls.questionFloat("Ingresar tiempo de vuelta 1: ")
let vuelta2: number = rls.questionFloat("Ingresar tiempo de vuelta 2: ")
let vuelta3: number = rls.questionFloat("Ingresar tiempo de vuelta1 3: ")
let vuelta4: number = rls.questionFloat("Ingresar tiempo de vuelta1 4: ")
let tiempoTotal: number = vuelta1 + vuelta2 + vuelta3 + vuelta4;

console.log("Tiempo Total: ", tiempoTotal);
console.log("Tiempo Promedio: ", tiempoTotal / 4);