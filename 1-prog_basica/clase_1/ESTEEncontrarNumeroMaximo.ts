import * as rls from 'readline-sync';

let num: number = rls.questionInt('Ingrese los valores (recuera que "0" finaliza el programa): ')
let elMayor: number = num;

while (num != 0) {
    if (num > elMayor) {
        elMayor = num;
    } console.log('ingrese otro valor: ');
    break
}           
if (num == 0) {
    console.log('El numero mayor es: ', elMayor);
}