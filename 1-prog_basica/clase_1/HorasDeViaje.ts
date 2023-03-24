import * as readlineSync from 'readline-sync';

let distancia: number = readlineSync.questionFloat ("Ingrese la distancia que resta: ");
console.log("Aún le quedan ", distancia/110, "hs de viaje.");
