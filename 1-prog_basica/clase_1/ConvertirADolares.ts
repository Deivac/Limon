import * as readlineSync from 'readline-sync';

let valorEnPesos: number = readlineSync.questionFloat ("Ingrese el monto en pesos: ");
console.log("Retorna el valor en dolares: ", valorEnPesos/380);
