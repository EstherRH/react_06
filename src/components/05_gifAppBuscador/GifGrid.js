
// Fetch API
// obtener las imágenes que queremos

// Intro a useEffect

// en este componente: cuando note que hay un nuevo elemento, hace la petición http
// y traiga las imgs correspondientes a la categoría

// abrir Postman:
// get: api.giphy.com/v1/gifs/search
// key: api_key
// value: QOHo5pdgc4r9KlBkpjsKmAYTnTBc5WcE
// click en Send
// aparece la info

// búsqueda: aloy
// límite: 10

import React, {useState, useEffect} from "react";
import GifGridItem from "./GifGridItem";
import './GifStyle.css'
import {getGifs} from "../../helpers/aaagetGifs";
import {useFetchGifs} from "../../hooks/useFetchGifs"; // se importa de helpers

const GifGrid = ({ category }) => {

    // estado inicial: array vacío
    // const [images, setImages] = useState([]);


    // importación del custom hook:
    // se desestructura el state: { data, loading }
    // se coloca el loading más abajo
    const { data:images, loading } = useFetchGifs( category );


    // la función se ejecuta solo una vez
    // cuando se carga el componente por primera vez
    // lanza la petición para obtener los gifs -->  getGifs( category )
    // y los coloca en las imágenes -->  .then( imgs => setImages( imgs ) );
    // se implementa el useEffect porque cada vez que cambiáramos el estado en el componente
    // el GifGrid se renderiza y se vuelve a ejecutar
    // esto mismo va a suceder con el useFetchGifs
    // queremos que se dispare la petición SOLO si la categoría cambia
    // useEffect( () => {
        // recibe la función que queremos ejecutar
        // se le pasa la categoría (category)
        // se colocan .then porque retorna una promesa
        // getGifs( category )
        //     .then( imgs => setImages( imgs ) );
    // }, [ category ] )
    // deps: [] --> el segundo argumento es un array de dependencias
    // deps: [category] --> si la categoría cambia, se tendría que volver a ejecutar



    // va a regresar título, imagen, etc
    return (
        <>
            {/* se imprime la categoría */}
            <h3> { category } </h3>

             {/*ternario
             si loading está en true: cargando
             Aparece "cargando" durante 3 segundos
             y luego data cargada
             */}
            { loading ? 'Cargando...' : 'Data cargada'}

            {/*es otra forma de ternario*/}
            {/*{ loading && 'Cargando...'}*/}

            <div className="card-grid">



                {/*  título:  */}
                {/*{*/}
                {/*    images.map(({ id, title }) => (*/}
                {/*        <li key={ id }> { title } </li>*/}
                {/*    ) )*/}
                {/*}*/}

                {
                    images.map( img => (
                        <GifGridItem
                            key={ img.id }
                            { ...img }
                        />
                    ))
                }

            </div>
        </>
    )
}
export default GifGrid;


