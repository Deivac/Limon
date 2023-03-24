import * as readlineSync from 'readline-sync';

let primerNumero: number = readlineSync.questionInt ("Ingrese el primer numero: ");
console.log("El primer número es: ", primerNumero);
let segundoNumero: number = readlineSync.questionInt ("Ingrese el segundo numero: ");
console.log("El segundo número es: ", segundoNumero);
