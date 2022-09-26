
// cómo imprimir variables en el html
// qué sucede cuando colocamos variables o constantes en nuestras etiquetas html (en el jsx)
// dentro del { ... } se puede poner expresión de JS que retorne un valor (pero no cualquier valor)

import React from "react";

const BbbCom = () => {

    const saludo = 'Hola mundo const'  // constante con el nombre de saludo
    const num = 123
    const array = [1,2,3,4,5]   // concatenación de elementos

    const objeto = {
        nombre: 'Fernando',
        edad: 34
    }

    return (
        <>
            {/*imprime la variable en el html*/}
            <p> { saludo } </p>
            <p> { num } </p>
            <p> { array } </p>

            {/*JSON.stringify() --> convierte el objeto a string*/}
            {/*etiqueta pre*/}
            <pre> { JSON.stringify( objeto, null, 3 ) } </pre>
            <p className="">Hello there</p>
        </>
    );
};
export default BbbCom;
