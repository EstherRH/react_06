
// Variables
// Constantes

// no usar var

// siempre --> const y let

// const:
// las constantes no se van a renovar
// si el valor no se va a cambiar, se coloca como una constante:
// const apellido = 'Herrero';


// template strings --> para concatenar strings

import React from "react";

const VariablesConstantes = () => {
    const nombre = 'Esther';
    const apellido = 'Rguez';
    const total = 1 + 2;

    return (
        <div className="App">
            <p>Nombre: {nombre}, Apellido: {apellido}</p>
            <p>La suma es {total}</p>
        </div>
    );
}

export default VariablesConstantes;
