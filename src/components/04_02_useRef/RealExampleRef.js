
// hook: useRef

// useLayoutEffect
// se dispara de forma síncrona

// async

// Petición síncrona: afecta el flujo, depende de la de abajo
// espera la respuesta y después se ejecuta la siguiente línea
// va línea a línea
// hasta que no recibe la petición no pasa a la siguiente línea

// asíncrona: hace la petición y no espera respuesta, pasa directamente a la siguiente línea


import React, { useState } from "react";
import '../04_00_hooks_useState/style.css'
import Quote from '../04_03_useLayaoutEffect/Quote';

const RealExampleRef = () => {

    const [show, setShow] = useState(false)

    return (
        <div>
            <h1> useRef - Focus Screen </h1>
            <hr/>

            { show && <Quote/> }
            
        </div>
    );
};
export default RealExampleRef;

