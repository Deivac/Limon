import * as rls from 'readline-sync';

let usuario: string = "usuario";
let clave: string = "123456";
let userIngresado: string = rls.question("Por favor ingrese el usuario: ");
let claveIngresada: string = rls.question("Por favor ingrese la clave: ");
if (usuario == userIngresado && clave == claveIngresada) {
    console.log("Bienvenido");
} else {
    console.log("El usuario o la clave son incorrectos");
}