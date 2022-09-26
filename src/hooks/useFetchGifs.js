
// CUSTOM HOOKS

// useFetchGifs --> el use de delante indica que es un hook
// todos los hooks empiezan con use

// los hooks son funciones

// cómo hacer un custom hooks
// es extraer lógica de algún componente
// o lógica que queremos reutilizar de forma sencilla

// funcionan como si fueran functional components

// se extrae una pequeña lógica que vamos a implementar para realizar una carga automática
// y cuando tengamos la data vamos a renderizarla en pantalla
// useFetchGifs --> se encarga de hacer esa petición automática cuando se cargue el componente la primera vez

import {useEffect, useState} from "react";
import {getGifs} from "../helpers/aaagetGifs";


// este va a ser un custom hook
// permite que cuando el componente carga --> realizar la petición Fecth
// y cuándo terminó la carga

export const useFetchGifs = ( category ) => {

    // estado inicial: objeto
    // data: array vacío

    const [state, setState] = useState ({
        data: [],
        loading: true
    });

    useEffect( () => {

        // aquí se va a ejecutar la petición http
        // hacer la petición y traer las imágenes
        // esto es una promesa
        getGifs( category )
            .then( imgs => {
                setTimeout(() => {
                    setState({
                        // se manda la info:
                        data: imgs,
                        loading: false
                    });
                }, 3000);
            })

    }, [category])


    // a los 3 segundos se ejecuta lo que está dentro
    // setTimeout ( () => {
    //     setState ({
    //         data: [1,2,3,4,5,6,7],
    //         loading: false
    //     })
    // }, 3000 );

    // se retorna el stare
    return state; // { data:[], loading: true }
}

// después se importa en GifGrid







