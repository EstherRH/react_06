// componente de Header
// otra forma de hacerlo
// Nombre del componente: Header01
// se hace con const

import React from 'react';

const Header01 = (props) => {

    // Aquí puede ir código javaScript
    // cómo mostrar ese total:
    const total = 1 + 2;
    const {cantidad} = props;

    return (
        <div>
            <h1>{ props.titulo }</h1>

            {/*Aquí se llama al total
            de la función que hemos creado antes*/}
            <p>La suma es { total }</p>
            <p>Esta es la {cantidad}</p>
        {/*  En cantidad aparece un 5 porque es el estado inicial  */}
        </div>
    );
}

export default Header01;

