import * as rls from 'readline-sync';

let nombreApellido: string = rls.question ('Ingresar nombre y apellido del alumno: ')
let practica: number = rls.questionFloat ('Ingresar la nota que corresponde a la practica del alumno: ');
let resolucionDeProblemas: number = rls.questionFloat ('Ingresar la nota que corresponde a la resolucion de problemas del alumno: ');
let teoria: number = rls.questionFloat ('Ingresar la nota que corresponde a la teoria del alumno: ');
let promedio: number;
 

while (nombreApellido!=''){
    if ((practica<=10 && practica>=0) && (resolucionDeProblemas<=10 && resolucionDeProblemas>=0) &&
(teoria<=10 && teoria>=0)){
    promedio = ((practica*0.1)+(resolucionDeProblemas*0.5)+(teoria*0.4));
    console.log('El promedio final de ', nombreApellido, ' es :',promedio)
} else {
    console.log ("Error en las notas ingresadas" );
}
let nombreAlumno = rls.question("Ingresar nombre y apellido del alumno: ");
}
