import * as rls from 'readline-sync';

let clave: string;

for (let contador: number = 1; contador <= 3; contador++){
    clave = rls.question("Ingresar clave: ");
    if(clave == "eureka"){
        console.log("contraseña correcta");
        break;
    } else {
        console.log("contraseña incorrecta");
    }
}