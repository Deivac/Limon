"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rls = require("readline-sync");
var posicionLlegada = rls.questionInt("Ingrese la posición de llegada del competidor: ");
if (posicionLlegada == 1) {
    console.log("Entregar medalla de oro");
}
else {
    if (posicionLlegada == 2) {
        console.log("Entregar medalla de plata");
    }
    else {
        if (posicionLlegada == 3) {
            console.log("Entregar medalla de bronce");
        }
        else {
            console.log("Entregar mención de participación");
        }
    }
}
