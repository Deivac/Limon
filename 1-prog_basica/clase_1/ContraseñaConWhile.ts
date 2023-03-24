import * as rls from 'readline-sync';

let contador: number = 1;
let clave: string = 'eureka';
let pass: string = rls.question('Ingresar clave: ');

while (pass != clave && contador <=2 ){
    console.log('Clave incorrecta, intentos restantes: ', contador, 'de 3');
    contador ++;
    pass = rls.question('Ingresar clave: ');
}
if (pass == clave){
    console.log('Login correcto');
} else {
    console.log('Sin intentos 3 de 3');
}