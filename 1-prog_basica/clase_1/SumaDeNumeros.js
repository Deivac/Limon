"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rls = require("readline-sync");
var numero1 = rls.questionInt('Ingrese el valor menor: ');
var numero2 = rls.questionInt('Ingrese el valor mayor: ');
var sumaDeValores;
sumaDeValores = 0;
while (numero1 <= numero2) {
    sumaDeValores = sumaDeValores + numero1;
    numero1++;
}
console.log("La suma total de los numeros, entre valores asignados, es: ", sumaDeValores);
