import * as rls from "readline-sync";

let alturaPermitida: number = rls.questionInt("Ingresar altura en centimetros: ");
let puedeSubir: boolean = (alturaPermitida >= 130);

if (puedeSubir == true){
    console.log("Puedes ingresar. Diviertete!!!");
} else {
    console.log("Tomá danonino");
}
