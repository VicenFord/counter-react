'use strict'

fetch('https://jsonplaceholder.typicode.com/users/7')
    .then(resp => resp.json()) //Como Fx normal tengo que ponerle RETURN resp.json(), de la forma que lo
    //se lo eacabo de hacer se lo puso implícitamente, por eso funciona. Tiene el ''return'' escondido así.
    .then((respDATA) => {
        console.log(respDATA);
        document.write(`
        <strong> Nombre: </strong> ${respDATA.name}, 
        <strong> Usuario: </strong> ${respDATA.username}, 
        <strong> Email: </strong> ${respDATA.email}.`);
    });

// EJ: EJ: DESTRUCTURING de Objetos y de Arrays:::::::

//--Destructuring de OBJETOS:
const {name, apellido, edad} = {
    name: 'Vicen',
    apellido: 'Ford',
    edad: 23
};
console.log(name, apellido, edad);


const {name: name2, apellido: apellido2, edad: edad2} = {
    name: 'Nike Air Force',
    apellido: '1 low',
    edad: 1998
};
console.log(name2, apellido2, edad2);

//--Destructuring de ARRAYS:
const usuarios = ['Pepe', 'Juan', 'Lucía', 'María'];
console.log(usuarios[3]); //=> María

const [, , , u4] = ['Pepe', 'Juan', 'Lucía', 'María']; //=> No consumo memoria de mas y no declaro los que no 
                                                       //voy a necesitar.
console.log(u4); //=> María
