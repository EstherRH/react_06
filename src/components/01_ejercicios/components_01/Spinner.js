

// Se crea un nuevo componente: spinner
// https://tobiasahlin.com/spinkit/

// se carga en app.js --> componente = <Spinner/>

import React from 'react';
import './Spinner.css' // este CSS sale de la web de spinkit

const Spinner = () => {
    return (
        // HTML y CSS se copia desde la web de spinkit
        <div className="sk-chase">
            <div className="sk-chase-dot"></div>
            <div className="sk-chase-dot"></div>
            <div className="sk-chase-dot"></div>
            <div className="sk-chase-dot"></div>
            <div className="sk-chase-dot"></div>
            <div className="sk-chase-dot"></div>
        </div>
    );
}

export default Spinner;