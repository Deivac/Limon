import * as rls from 'readline-sync';

let llegadaColectivo: string;
console.log("Esperando el colectivo");
llegadaColectivo = rls.question("Llegó el colectivo? (S/N): ");

if (llegadaColectivo = "S", "s"){
    console.log("Llegó el colectivo");
}
while (llegadaColectivo == "N") {
    console.log("Esperando el colectivo");
    llegadaColectivo = rls.question("Llegó el colectivo? (S/N): ");
}

