'use strict'

//EJ: Definir funciones para que sean constantes y no se puedan sobreescribir.
const FxSuma = function(a, b){
    return console.log(`El resultado de la suma de la Fx es de ${a+b}`);
};

FxSuma(10, 15);
FxSuma(15, 7);



//EJ: Operador ternario:
const saldo = 500;
const mensaje = saldo>=500 ? 'Tu saldo es mayor a 500' : 'Tienes menos de 500 pesos';

console.log(mensaje);

//EJ: JSON:
const Usuario = {
    name: 'Vicente',
    surname: 'Ford',
    age: 20,
    height: 1.90
};

console.log(Usuario);
console.log(Usuario.name, Usuario.surname, Usuario.age, Usuario.height);