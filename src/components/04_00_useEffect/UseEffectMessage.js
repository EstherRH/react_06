import React, {useEffect, useState} from "react";

const Message = () => {

    // se inicializa en x:0 e Y:0
    const [coords, setCoords] = useState({ x:0, y:0 });
    const { x, y } = coords; // se extraen las coordenadas, se desestructura

    // queremos que se ejecute cuando el componente es ejecutado por primera vez
    useEffect( () => {

        // a) CUERPO

        // función mouseMove
        // van a aparecer las coordenadas X e Y
        // cuando el componente se crea por primera vez, se toma este mouseMove
        const onMouseMove = (e) => {
            const coords = { x: e.x, y: e.y}; // se extraen las coordenadas
            setCoords ( coords ); // nuevas coordenadas
        }

        // Se crea un Listener para cuando el componente se monta
        // se escucha el 'mousemove', es decir, los movimientos del mouse
        // al mover el ratón --> se ejecuta la función mouseMove
        // ADD Ev. List.
        window.addEventListener('mousemove', onMouseMove );


        return () => {
            // b) LIMPIEZA
            // procedimiento de limpieza cuando el componente ya no se usa
            // se le pasa la función que se definió arriba: mouseMove
            // remover el Listener  -->  REMOVE ev. list.
            window.removeEventListener('mousemove', onMouseMove );
        }

    }, [] )
    // dependencia por la que cuál se va a escuchar

    // aparece el mensaje cuando se escribe algo en el input:
    return (
        <>
            <p> Ha funcionado!!! </p>
            <p> x: { x } y: { y } </p>

            {/*  es un objeto, así que hay que pasarlo por un stringify  */}
            { JSON.stringify( coords ) }
        </>
    );
};
export default Message;