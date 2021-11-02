'use strict'

const resolveAfter2Seconds = (x) => {  //Tengo esta Fx que tarda 2 segundos en ejecutarse.
    return new Promise( (resolve, reject) => {
            setTimeout(() => {
                resolve(x); //Si está todo ok.
                reject('No se pudo obtener un N°.'); //Si algo falla.
            }, 2000);
    });
};


const add1 = async (x) => { //Ésta Fx es asíncrona, se ejecuta en un tiempo/hilo independiente de la página.
    const a = await resolveAfter2Seconds(20); //Acá tiene que esperar los 2 seg de la Fx original PORQUE TIENE AWAIT
    const b = await resolveAfter2Seconds(30); //DEVUELTA TIENE QUE ESPERAR OTROS 2 SEGUNDOS de la Fx orig.
    return x + a + b;
}


add1(10).then( (resp) => {
    console.log(resp);  // Escupe '60' despues de 4 segundos 
});


//EJ: EJ: EJ: FETCH API CON ASYNC:

const peticion = async () => {
    const resp = await fetch('https://jsonplaceholder.typicode.com/users/7'); //Tengo que esperar respuesta
    return await resp.json(); //Tengo que esperar que se convierta a JSON.
};

const respFinal = peticion().then((data) => {
    console.log(data);
})



//EL MISMO PROCEDIMIENTO FETCH API CON .THEN:

fetch('https://jsonplaceholder.typicode.com/users/7')
    .then(answer => answer.json())
    .then((answerJSON) => {
        console.log(answerJSON)
    });