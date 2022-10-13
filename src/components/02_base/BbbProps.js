
// Comuncación entre componentes
// Props  -->  son las Propiedades que son enviadas a los componentes

import React from "react";

// const BbbProps = (props) => {

// se hace una desestructuración de elementos
const BbbProps = ( { saludo = 'Hola Bbb' } ) => {

    return (
        <>
            <p> { saludo } </p>
            <p className="">Hello there</p>
        </>
    );
};
export default BbbProps;
