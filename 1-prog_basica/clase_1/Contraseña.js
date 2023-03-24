"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rls = require("readline-sync");
var usuario = "Juan";
var clave = "claveJuan";
var userIngresado = rls.question("Por favor ingrese el usuario: ");
var claveIngresada = rls.question("Por favor ingrese la clave: ");
if (usuario == userIngresado && clave == claveIngresada) {
    console.log("Bienvenido");
}
else {
    console.log("El usuario o la clave son incorrectos");
}
