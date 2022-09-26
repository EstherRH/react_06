
// PropTypes
// son los tipos de props que debería de recibir el componente (BbbPropsTypes)
// verificación de tipos
// Para usar VERIFICACIÓN de tipos en las props de un componente, puedes asignar la propiedad especial PropTypes:

import React from "react";
import PropTypes from 'prop-types'
import PrimeraApp from "./AaaComponentes";

const BbbPropsTypes = ( { saludo = 'Hola Bbb', subtitulo, subtitulo2 } ) => {

    return (
        <>
            <p> { saludo } </p>
            <p className="">Hello there</p>
            <p> { subtitulo } </p>
            <p> { subtitulo2 } </p>
        </>
    );
};

// Se coloca aquí. Fuera de la función
// PrimeraApp.propTypes   es igual a un objeto --> { ... }
// puede ser: .string, . number, .bool, .array, etc.
PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired
    //  saludo: PropTypes.number
    // etc
}

// DefaultProps
PrimeraApp.defaultProps = {
    subtitulo: 'Soy un subtítulo',  // valores por defecto
    subtitulo2: ''
}

export default BbbPropsTypes;
