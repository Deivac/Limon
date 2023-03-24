import * as readlineSync from 'readline-sync';

// comentario: Tipo (numero) = quietionInt (combierte el programa con resultado numerico entero),

let alturaRectangulo: number = readlineSync.questionInt("Ingrese altura del rectangulo: ");
let baseRectangulo: number = readlineSync.questionInt("Ingrese base del rectangulo: ");

let areaDelRectangulo: number = alturaRectangulo * baseRectangulo;
console.log ("El área del rectnagulo es: ", areaDelRectangulo);