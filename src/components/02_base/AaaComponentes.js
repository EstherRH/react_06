
// Teoría

// 01_useState
// useState --> el más común

// qué es un COMPONENTE:
// pequeña pieza de código encapsulada reutilizable que puede tener estado o no
// cada componente puede tener un componente hijo

// !!!  se nombra con la primera en mayúsculas:   AaaComponent  !!!

// tenemos dos tipos: basado en:
// a) clases (es como se hacía antes)
// b) funciones --> const. Functional component (ahora)

// ejemplo de: b) Functional component:

import React from "react";


// nombre del componente: PrimeraApp
const PrimeraApp = () => {

    const persona = {
        id: '123',
        dd: 'dd'
    }


    //  return --> regresa un html
    //  solo puede retornar UN OBJETO a la vez: envolver todo en un div ( o en un fragment)
    //  o no poner nada (<>  </>) --> es la forma corta de fragment
    return (
        // <div>
        // <Fragment>

        <>
            <p>Hello there!</p>
            <p>Hello there! { persona.id }</p>  {/*  Hello there! 123  */}
            <p>La suma es igual a {1 + 1} </p>   {/*  La suma es igual a 2   */}
        </>

        // </Fragment>
        // </div>
    );
};

export default PrimeraApp;







