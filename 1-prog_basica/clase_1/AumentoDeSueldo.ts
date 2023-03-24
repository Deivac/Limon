import * as rls from 'readline-sync';


let ganancia: number = rls.questionFloat('Ingreso actual: ');
let veinte: number = ganancia*1.2;
let diez: number = ganancia*1.1;
let cinco: number = ganancia*1.05;

if (0<ganancia && ganancia<=15000){
    console.log('Debería cobrar: ', veinte);
} else if (ganancia>=15001 && ganancia<=20000){
    console.log('Debería cobrar: ', diez);
} else if (ganancia>=20001 && ganancia<=25000){
    console.log('Debería cobrar: ', diez);
} else {
    console.log('Debería cobrar: ',ganancia)
}    
