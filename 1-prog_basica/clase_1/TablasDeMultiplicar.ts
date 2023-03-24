import * as rls from 'readline-sync';

let num1: number = rls.questionInt('Ingrese el numero de la tabla que desea: ')
let num2: number = rls.questionInt('Ingresar hasta que numero desea saber: ')
let resultado: number = 0;

for (let contador: number = 1; contador <= num2; contador++) {
    resultado = num1 * contador;
    console.log(num1, "x", contador, "=", resultado);
}