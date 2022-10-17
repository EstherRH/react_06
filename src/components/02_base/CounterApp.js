// Ejercicio_CounterApp

// 1. Crear un nuevo componente dentro de la carpeta SRC (source) llamado Ejercicio_CounterApp
// 2. El Ejercicio_CounterApp debe de ser un Functional Component

// 3. El contenido del Ejercicio_CounterApp debe de ser:
//     <h1>Ejercicio_CounterApp</h1>
//     <h2> { value } </h2>

// 4. Donde "value" es una propiedad enviada desde el padre hacia el componente Ejercicio_CounterApp (Debe ser númerica validada con PropTypes)
// 5. Reemplazar en el index.js ó main.jsx el componente de <PrimeraApp /> por el componente <Ejercicio_CounterApp /> (no se olviden del value que debe de ser un número)
// 6. Asegúrense de no tener errores ni warnings (Cualquier warning no usado, comentar el código)


import React from "react";
import PropTypes from "prop-types";

const EjercicioCounterApp = ({ value=123 }) => {

    return (
        <>
            <p> CounterApp </p>
            <p> { value } </p>
        </>
    )
}

EjercicioCounterApp.propTypes = {
    value: PropTypes.number
}

export default EjercicioCounterApp;


