import * as readlineSync from 'readline-sync';

let precioProducto: number = readlineSync.questionFloat ("Valor del producto: ");
console.log("Precio final con 10% off: ", precioProducto*0.9);
