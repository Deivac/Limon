import * as rls from 'readline-sync';

let monto: number = rls.questionInt("Ingresar monto: ");
let cantidad: number = rls.questionInt("Ingresar cantidad: ");
let montoConDescuento: number = 0;
let descuento: number = 0;
let precioTotal: number = 0;
precioTotal = (monto * cantidad);
if(precioTotal >= 1000){
    descuento = (precioTotal*10)/100;
    montoConDescuento = precioTotal - descuento;
    console.log("Por gastar mas de $1000, tiene un 10% de descuento.");
    console.log("El monto a pagar es de: "+ montoConDescuento)
}else{
    console.log("No tiene descuento. El precio es: "+ precioTotal)
}
