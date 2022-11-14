
// useFetch - CustomHook (124 - 127)

// Axios ( se ve más adelante) --> para hacer peticiones http

// vamos a crear un custom hook que permita hacer peticiones a cualquier url
// varios hooks personalizados van a interactuar entre sí

//  a)   https://breakingbadapi.com/

//  en la web:
//  Get quote by id: Endpoint to get quote by id
//  b)  /api/quotes/1

//  poner en postman:
//  petición get
//  https://www.breakingbadapi.com/api/quotes/1

// (esta url tmb se utiliza en este componente)

// Resultado:
// es un array y dentro un objeto:

// [
//     {
//         "quote_id": 1,
//         "quote": "I am not in danger, Skyler. I am the danger!",
//         "author": "Walter White",
//         "series": "Breaking Bad"
//     }
// ]


// ir probando:
// /api/quotes/2    /api/quotes/3   etc.

import React from "react";
import { useFetch1, useCouter1 } from "../../../hooks"; // desde el index.js ( /hooks/index.js )
// import {useFetch} from "../../hooks/useFetch";
// import {useFetch1} from "../../hooks/useFetch1";
// import {useCouter1} from "../../hooks/useCouter1";
import '../01_useState/style.css'

// el componente tiene dos estados: cuando está cargando y cuando ya tiene la info

const MultipleCustomHook = () => {

    // useFetch + useCouter1
    // en el state ( en el componente de useFetch )

    // va a regresar el counter y el increment
    // importamos el componente de useCouter1 de hooks
    // cuando se haga click en el botón, se va a incrementar en 1
    // valor inicial de 1 --> quotes/1 --> que después pasa a /${ counter }
    // se desestructura la función de incrementar
    const { counter, increment } = useCouter1(1);


    // se manda llamar el useFetch
    // es la url que se utilizó en postman
    // el useFetch regresa un state --> es su return está el state
    // loading: aparece mientras carga y después se muestra la data
    // ${ counter } -->  https://www.breakingbadapi.com/api/quotes/1
    // se desestructura
    // valor de counter
    const { isLoading, data, hasError } = useFetch1( ` https://www.breakingbadapi.com/api/quotes/${ counter } `);

    // en el API la data viene con un array
    // se desestructura algo que viene de la data: el author y quote
    // dentro de data está author y quote (están dentro del objeto)
    // se hace una validación
    // !!data && data[0];   -->  si la data tiene un valor, entonces regresa la data en la posición 0 (el primer elemento del array)
    // !!data && data[0];   --> si es true, se va a ejecutar
    // condicional: si el primer argumento es correcto, entonces ejecuta data[0]
    // en caso de que no exista, no sigue evaluando
    // !!null es un false (es doble negación)

    const { author, quote } = !!data && data[0];

    return (
        <div>
            <p> useFetch - Custom Hook </p>
            <p> BreakingBad Quotes </p>
            <hr/>

            {/*  ternario del loading
             muestra loading
             y cuando tenemos la info: aparece el componente
             */}
            {
                isLoading ?
                    (
                        <div className="alert alert-info text-center">
                            Loading...
                        </div>
                    ) : (
                        <blockquote className=" blockquote text-right ">
                            <p className="mb-0"> Hello there! { quote } </p>
                            <footer className="blockquote-footer m-5"> - { author } </footer>
                        </blockquote>
                    )
            }

            {/*  botón que cargue el quote
                 necesitamos un contador para saber en qué quote estoy
                 al hacer click, pasa a la siguiente frase

                 disabled={ loading } mientras carga no se puede dar al botón
                 */}
            <button
                className="btn btn-primary"
                disabled={ isLoading }
                onClick={ increment }
            >
                Siguiente quote
            </button>

        </div>
    );
};
export default MultipleCustomHook;

