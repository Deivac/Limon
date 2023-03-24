"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rls = require("readline-sync");
var ganancia = rls.questionFloat('Ingreso actual: ');
var veinte = ganancia * 1.2;
var diez = ganancia * 1.1;
var cinco = ganancia * 1.05;
if (0 < ganancia && ganancia <= 15000) {
    console.log('Debería cobrar: ', veinte);
}
else if (ganancia >= 15001 && ganancia <= 20000) {
    console.log('Debería cobrar: ', diez);
}
else if (ganancia >= 20001 && ganancia <= 25000) {
    console.log('Debería cobrar: ', diez);
}
else {
    console.log('Debería cobrar: ', ganancia);
}
