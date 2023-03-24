import * as readlineSync from 'readline-sync';

let altura: number = readlineSync.questionFloat ("Ingrese la Altura: ");
let peso: number = readlineSync.questionFloat ("Ingrese el Peso: ");

console.log("IMC: ", peso/(altura^2));

