
// Hooks

// qué es un ESTADO
// P ejemplo: un formulario
// cuando se muestra la primera vez --> tiene un ESTADO INCIAL
// si el usuario interactúa, el estado CAMBIA

// cómo imprimir variables en el html
// qué sucede cuando colocamos variables o constantes en nuestras etiquetas html (en el jsx)

// Hooks --> son FUNCIONES

// useState({}) --> el más común

import React, { useState } from "react";

const Base = () => {

    // se hace la desestructuración
    // setName --> es la función
    // estructura: nombre y el set delante --> setName
    // valor inicial --> en este caso 0
    const [name, setName] = useState("Wanda");

    return (
        <>
            <p> {name} </p>
        </>
    );
};
export default Base;







