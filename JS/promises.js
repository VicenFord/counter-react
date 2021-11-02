'use strict'

const sumar = (a, b) => {
    return new Promise( (resolve, reject) => {
        if(a < 0 || b < 0){
            reject("Error, ésta suma solo se puede hacer con numeros +");
        }else{
            resolve(()=>{
                alert(`El resultado de la suma es ${a+b}`)
                console.log(`Bueeenas tu suma fue exitosa y es ${a+b}`);
            });
        }
    } );
};


const resultadoSuma = sumar(8, 7)
    .then((resolveMSJ) => {
        resolveMSJ();
        console.log(`Por si no te habia quedado claro, el resultado de tu suma te lo puse en alert y por consola`);
    })
    .catch((rejectMSJ)=>{
        console.log(rejectMSJ);
    });