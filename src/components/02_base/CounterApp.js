// Ejercicio_CounterApp

// 1. Crear un nuevo componente dentro de la carpeta SRC (source) llamado Ejercicio_CounterApp
// 2. El Ejercicio_CounterApp debe de ser un Functional Component

// 3. El contenido del Ejercicio_CounterApp debe de ser:
//     <h1>Ejercicio_CounterApp</h1>
//     <h2> { value } </h2>

// 4. Donde "value" es una propiedad enviada desde el padre hacia el componente Ejercicio_CounterApp (Debe ser numérica validada con PropTypes)
// 5. Reemplazar en el index.js ó main.jsx el componente de <PrimeraApp /> por el componente <Ejercicio_CounterApp /> (no se olviden del value que debe de ser un número)
// 6. Asegúrense de no tener errores ni warnings (Cualquier warning no usado, comentar el código)


import React from "react";
import PropTypes from "prop-types";


// el value va a ser 10 porque en el App.js se le envía el value={10}
const EjercicioCounterApp = ({ value= 123, value1 = 222 }) => {

    return (
        <>
            <p> CounterApp </p>
            <p> { value } </p>
            <p> { value1 } </p>
        </>
    )
}

// value tiene que ser un número
EjercicioCounterApp.propTypes = {
    value: PropTypes.number,
    value1: PropTypes.number.isRequired // requerido
}

export default EjercicioCounterApp;

// Continúa en el archivo: src/components/04_00_hooks_useState/CounterApp1.js y CounterApp2.js


