"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rls = require("readline-sync");
var contador = 1;
var clave = 'eureka';
var pass = rls.question('Ingresar clave: ');
while (pass != clave && contador <= 2) {
    console.log('Clave incorrecta, intentos restantes: ', contador, 'de 3');
    contador++;
    pass = rls.question('Ingresar clave: ');
}
if (pass == clave) {
    console.log('Login correcto');
}
else {
    console.log('Sin intentos 3 de 3');
}
