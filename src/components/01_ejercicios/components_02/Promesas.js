
// Promesas
// son asíncronas
// utilizan un argumento que es un callback
// argumentos: resolve y reject

import {heroes} from "./data_heroes";
import {getHeroeById} from "./02_ejercicio";

const getHeroe = (id) => {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            // resolve();

            const heroe = getHeroeById( id ); // ejemplo

            if (heroe) {
                resolve ( heroe);
            } else {
                reject ('no se pudo encontrar')
            }

        }, 2000)
    });
}


// qué hará cuando la promesa se cumpla

// dentro reciben un callback
// se utiliza .then() -->  la promesa se hizo correctamente
// .catch()  --> es la excepción, sino se hace correctamente
// .finally() --> después de then y catch


// promesa.then( (heroe) => {
//     console.log('Then de la promesa')
// })
//
//     .catch( err => console.warn( err ) );

// si no encuentra el heroe, llama al reject
getHeroe(4)
    .then ( heroe => console.log('Heroe', heroe))
    .catch( err => console.warn( err ) )












