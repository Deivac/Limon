import * as rls from "readline-sync";

let nroDeseado: number = rls.questionInt("Escriba el nro que desea verificar si es mayor o no, a 20");

if (nroDesado > 20) {
    console.log("El número es mayor a 20: " + nroDeseado);
} else {
    console.log("El número es menor o igual a 20: " + nroDeseado);
}