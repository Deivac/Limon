import * as rls from 'readline-sync';

let valor: number = rls.questionInt('Ingresar un valor mayor a 0: ');

if (valor == 0){
    console.log('Por favor, respetar la consigna')
} else if (valor %2 == 0){
    console.log(valor, ' Es par.')
} else {
    console.log(valor, ' Es impar.')
}