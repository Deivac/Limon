"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rls = require("readline-sync");
var nombreApellido = rls.question('Ingresar nombre y apellido del alumno: ');
var practica = rls.questionFloat('Ingresar la nota que corresponde a la practica del alumno: ');
var resolucionDeProblemas = rls.questionFloat('Ingresar la nota que corresponde a la resolucion de problemas del alumno: ');
var teoria = rls.questionFloat('Ingresar la nota que corresponde a la teoria del alumno: ');
var promedio;
while (nombreApellido != '') {
    if ((practica <= 10 && practica >= 0) && (resolucionDeProblemas <= 10 && resolucionDeProblemas >= 0) &&
        (teoria <= 10 && teoria >= 0)) {
        promedio = ((practica * 0.1) + (resolucionDeProblemas * 0.5) + (teoria * 0.4));
        console.log('El promedio final de ', nombreApellido, ' es :', promedio);
    }
    else {
        console.log("Error en las notas ingresadas");
    }
    var nombreAlumno = rls.question("Ingresar nombre y apellido del alumno: ");
}
