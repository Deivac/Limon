import * as rls from 'readline-sync';

let tiempoDeVuelta1: number = rls.questionFloat("Tiempo de Vuelta 1: ");
let tiempoDeVuelta2: number = rls.questionFloat("Tiempo de Vuelta 2: ");
let tiempoDeVuelta3: number = rls.questionFloat("Tiempo de Vuelta 3: ");
let tiempoDeVuelta4: number = rls.questionFloat("Tiempo de Vuelta 4: ");
let tiempoPromedio: number = ((tiempoDeVuelta1 + tiempoDeVuelta2 + tiempoDeVuelta3 + tiempoDeVuelta4)/4)

console.log("Tiempo promedio: ", tiempoPromedio)