
// Teoría

// 04_00_hooks_useState
// useState --> el más común

// qué es un COMPONENTE:
// pequeña pieza de código encapsulada reutilizable que puede tener estado o no
// cada componente puede tener un componente hijo
// !!!  se nombra con la primera en mayúsculas:   AaaComponent  !!!

// tenemos dos tipos: basado en:
// a) clases (es como se hacía antes)
// b) funciones --> const. Functional component

// ejemplo de b) --> esto es un functional component:

import React, {Fragment} from "react";


// nombre del componente: PrimeraApp
const PrimeraApp = () => {

    const persona = {
        id: '123',
        dd: 'dd'
    }


    //  regresar un html
    //  solo puede retornar un objeto a la vez: envolver todo en un div ( o en un fragment)
    //  o no poner nada (<>  </>) --> es la forma corta de fragment
    return (
        // <div>
        // <Fragment>

        <>
            <p>Hello there!</p>
            <p>Hello there!</p>
            {persona}
        </>

        // </Fragment>
        // </div>
    )
}

export default PrimeraApp;







