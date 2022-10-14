
// Comunicación entre componentes --> Props
// Props  -->  son las PROPIEDADES que son enviadas a los componentes
// Props  -->  son los argumentos que se pasan a una función
// Props  -->  son las propiedades que los functional components reciben, y que se pueden usar dentro del componente

// Props  -->  se reciben las props que son un objeto. este objeto tiene información

// permiten establecer comunicación entre el padre y el hijo

import React from "react";

// const BbbProps = (props) => {
//    ...
//     return (
//         <> ... </>
//     );
// };


// se hace una desestructuración de elementos --> saludo, subtitulo, subtitulo2
const BbbProps = ( { saludo = 'Hola Bbb', saludo1, subtitulo = ' soy un subtítulo' } ) => {

    return (
        <>
            <p> { saludo } </p>
            <p> { saludo1 } </p>
            <p> { subtitulo } </p>
            <p className="">Hello there</p>
        </>
    );
};
export default BbbProps;
