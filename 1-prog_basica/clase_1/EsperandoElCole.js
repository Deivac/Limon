"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rls = require("readline-sync");
var llegadaColectivo;
console.log("Esperando el colectivo");
llegadaColectivo = rls.question("Llegó el colectivo? (S/N): ");
if (llegadaColectivo = "S", "s") {
    console.log("Llegó el colectivo");
}
while (llegadaColectivo == "N") {
    console.log("Esperando el colectivo");
    llegadaColectivo = rls.question("Llegó el colectivo? (S/N): ");
}
