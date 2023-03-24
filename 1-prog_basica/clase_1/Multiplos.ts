import * as readlineSync from "readline-sync";

let multiplos: number;
let listado: string = 'Multiplos de 2 y 3, con los valores 1 - 100: ';

for (let multiplos: number = 1; multiplos <= 100; multiplos++) {
    if (multiplos % 2 == 0 || multiplos % 3 == 0) {
        listado =  listado + multiplos + " ";
    }
}
console.log(listado);