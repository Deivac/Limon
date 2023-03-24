import * as rls from "readline-sync";

let numero1: number = rls.questionInt('Ingrese el valor menor: ');
let numero2: number = rls.questionInt('Ingrese el valor mayor: ');
let sumaDeValores: number;
sumaDeValores = 0;
while (numero1 <= numero2) {
    sumaDeValores = sumaDeValores + numero1;
    numero1++;
} 
console.log("La suma total de los numeros, entre valores asignados, es: ", sumaDeValores);
