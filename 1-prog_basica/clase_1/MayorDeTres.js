"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rls = require("readline-sync");
var numero1 = rls.questionFloat("Ingresar los valores que desa ordenar: ");
var numero2 = rls.questionFloat("Ingresar los valores que desa ordenar: ");
var numero3 = rls.questionFloat("Ingresar los valores que desa ordenar: ");
if (numero1 > numero2 && numero2 > numero3)
    console.log(numero1, numero2, numero3);
if (numero2 > numero1 && numero1 > numero3)
    console.log(numero2, numero1, numero3);
if (numero3 > numero2 && numero2 > numero1)
    console.log(numero3, numero2, numero1);
if (numero3 > numero1 && numero1 > numero2)
    console.log(numero3, numero1, numero2);
