import * as readlineSync from "readline-sync";

const clave: string = "Eureka";
let cant: number = 1;

while (cant <= 3) {
    console.clear();
    let claveAcceso: string = readlineSync.question("Ingresar Pasword: ");
    if (claveAcceso == clave) {
        console.log("Logueado");
        break;
    } else {
        console.log("Contraseña incorrecta!! Vuelve a intentarlo.");
        readlineSync.keyInPause("Presiona cualquier tecla para continuar.");
        cant++;
    }
}
if (cant == 4) {
    console.clear();
    console.log("Acceso DENEGADO!");
}

