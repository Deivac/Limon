"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rls = require("readline-sync");
var alturaPermitida = rls.questionInt("Ingresar altura en centimetros: ");
var puedeSubir = (alturaPermitida >= 130);
if (puedeSubir == true) {
    console.log("Puedes ingresar. Diviertete!!!");
}
else {
    console.log("Tomá danonino");
}
