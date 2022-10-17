
// PropTypes
// son los TIPOS de props que debería de recibir el componente (BbbPropsTypes)
// verificación de tipos
// Para usar VERIFICACIÓN de tipos en las props de un componente, puedes asignar la propiedad especial PropTypes:

// defaultProps --> valores por defecto

import React from "react";
import PropTypes from 'prop-types'

const BbbPropsTypes =
    ({
         hey = 'Hola Bbb',
         hey1 = 'Bbbbb',
         subtitulo,
         subtitulo1 = "123",
         subtitulo2,
         subtitulo3,
         subtitulo4
     }) => {

        return (
            <>
                <p> { hey } </p>
                <p> { hey1 } </p>
                <p className="">Hello there</p>
                <p> { subtitulo } </p>
                <p> { subtitulo1 } </p>
                <p> { subtitulo2 } </p>
                <p> { subtitulo3 } </p>
                <p> { subtitulo4 } </p>
            </>
        );
    };

// Se coloca aquí. Fuera de la función
// PrimeraApp.propTypes   es igual a un objeto --> { ... }
// puede ser: .string, . number, .bool, .array, etc.
// ejemplos:
BbbPropsTypes.propTypes = {
    hey: PropTypes.string.isRequired,
    hey1: PropTypes.string,
    subtitulo1: PropTypes.number,
    subtitulo2: PropTypes.array,
    subtitulo3: PropTypes.string,
    // etc
}


// DefaultProps
// en subtítulo: aparece el valor por defecto en App.js y si se borra, aparece el valor por defecto de aquí
BbbPropsTypes.defaultProps = {
    subtitulo: 'Soy un subtítulo',  // valores por defecto
    subtitulo4: ''
}

export default BbbPropsTypes;
