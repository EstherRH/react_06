
// useEffect unmount - cleanup

// se crea un COMPONENTE que se pueda MONTAR y DESMONTAR

// montado: cuando el componente se renderiza, es decir, lo mandamos a llamar

// estructura de la función
// tiene 3 partes:
// 1- el callback ( con el cuerpo y el return)

import React, { useEffect } from "react";

export const Message1 = () => {

    // cuerpo
    useEffect( () => {
    console.log('Message Mounted')

        // limpieza:
        return () => {
           console.log('Message Unmounted')
        }

    }, [] )

    return (
        <>
            <p> Usuario ya existe </p>

        </>
    );
};
