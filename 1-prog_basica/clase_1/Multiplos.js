"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var multiplos;
var listado = 'Multiplos de 2 y 3, con los valores 1 - 100: ';
for (var multiplos_1 = 1; multiplos_1 <= 100; multiplos_1++) {
    if (multiplos_1 % 2 == 0 || multiplos_1 % 3 == 0) {
        listado = listado + multiplos_1 + " ";
    }
}
console.log(listado);
