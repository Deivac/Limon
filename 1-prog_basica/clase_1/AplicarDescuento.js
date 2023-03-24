"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
var monto = readlineSync.questionInt("Ingresar monto: ");
var cantidad = readlineSync.questionInt("Ingresar cantidad: ");
var montoConDescuento = 0;
var descuento = 0;
var precioTotal = 0;
precioTotal = (monto * cantidad);
if (precioTotal >= 1000) {
    descuento = (precioTotal * 10) / 100;
    montoConDescuento = precioTotal - descuento;
    console.log("Por gastar mas de $1000, tiene un 1'% de descuento.");
    console.log("El monto a pagar es de: " + montoConDescuento);
}
else {
    console.log("No tiene descuento. El precio es: " + precioTotal);
}
