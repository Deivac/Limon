"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rls = require("readline-sync");
var num = rls.questionInt('Ingrese los valores (recuera que "0" finaliza el programa): ');
var elMayor = num;
while (num != 0) {
    if (num > elMayor) {
        elMayor = num;
    }
    console.log('ingrese otro valor: ');
    break;
}
if (num == 0) {
    console.log('El numero mayor es: ', elMayor);
}
