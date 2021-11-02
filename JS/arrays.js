'use strict'

const numeros = [1, 2, 3, 4, 5];
console.log(numeros);

// EJ: Recorrer con ForEach
numeros.forEach(function(num){
    document.write(`
    <ul>
        <li>${num}</li>
    </ul>`);
});

//EJ: Recorrer con .map
numeros.map(function(num, index){
    document.write(`
    <ul>
        <li>${num} de índice ${index}</li>
    </ul>`);
});

//EJ: Definir nuevos arreglos con .map a partir de otros arrays.
const numerosMAS1 = numeros.map(function(num){
    return num+1;
});

console.log(numerosMAS1);

//EJ: SPREAD OPERATOR:
const todosLOSnumeros = [...numeros, ...numerosMAS1];
document.write(`Todos los numeros juntos son: ${todosLOSnumeros}`);