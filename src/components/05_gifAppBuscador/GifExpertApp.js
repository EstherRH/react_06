
// https://giphy.com/channel/esther_herrero_

// Consumo de una API

// Primero se crea una API key

// buscador de imágenes
// Apy key: QOHo5pdgc4r9KlBkpjsKmAYTnTBc5WcE

// se crea el componente de Gif

import React, {useState} from "react";
import AddCategory from "./AddCategory";
import GifGrid from "./GifGrid";

const GifApp = () => {

    // crear una lista de categorías y mostralas
    // valor inicial ( en useState ) --> es un array
    // const [categories, setCategories] = useState( ['Wanda', 'Thor', 'Dr. Strange'] );
    const [categories, setCategories] = useState( ['Aloy'] );

    // agregar nuevo elemento al array al darle al botón
    // el estado cambio y se hace una nueva renderización
    // const handleAdd = () => {
    //     setCategories ( cats => [...cats, 'Thor'] );
    // }

    return (
        <>
            <p>Gif App!</p>

            {/*
            - Comunicación entre Componentes
            - componente con un input para escribir y agregar una nueva categoría:
            - se le puede ir pasando propiedades al componente
            - en este caso se le pasa una función: setCategories
            - y se le pasa la referencia a setCategories
            */}
            <AddCategory setCategories={ setCategories }/>

            {/*<button onClick={ handleAdd }> Agregar </button>*/}


            {/* 1) lista ordenada*/}
            <ol>
                {/*
                recorrer el array y regresar el que necesite
                expresión que regresa algo  -->  método  -->  .map
                return: devuelve tod el array en una lista ordenada
                */}
                {categories.map( category => {
                    return <li key={ category }> { category } </li>
                })}
            </ol>

            {/* 2) lista ordenada con Grid
            se importa el componente de GifGrid
            */}
            <ol>
                {
                    categories.map( category => (
                        <GifGrid key={category}
                                 category={category}
                        />
                    ) )
                }

            </ol>

        </>

    )
}

export default GifApp;








