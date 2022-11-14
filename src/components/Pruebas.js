
// eventos
// https://es.reactjs.org/docs/events.html

// onClick

// ejemplo de un Contador
// +1, -1, reset
// counterApp continuación


import React, {useState} from "react";
import PropTypes from "prop-types";

const EventoClick = ({ value= 10 }) => {

    // incorporamos el Hook: useState (0)
    // valor iniciar de counter: se inicializa en 0
    // al darle a Reset: pasa a 10
    // setCounter es la función que vamos a usar para incrementar, resetear o disminuir
    const [ counter, setCounter ] = useState( 0 );

    // eliminar 1
    const handleSubtract = () => {
        setCounter( counter - 1 );
    }

    // resetear
    // es igual al value, que en este caso es 10
    const handleReset = () => {
        setCounter( value );
    }

    // agregar 1
    // así se modifica el valor de counter
    // en este caso se incrementa
    const handleAdd = () => {
        setCounter( counter + 1 );
    }

    return (
        <>
            <p> CounterApp </p>
            <p> { counter } </p>

            {/*  evento onClick --> qué pasa al hacer click  */}
            {/*  onClick= {  aquí dentro va una función: se llama a esa función  } */}
            {/*  onClick= {  esto es una expresión de javaScript  } */}
            {/*  sumar, resetear, restar  */}
            {/*  handleSubtract --> función que se dispara cuando alguien hace click   */}
            <button onClick={ handleSubtract } > -1 </button>
            <button onClick={ handleReset } > Reset </button>
            <button onClick={ handleAdd } > +1 </button>
        </>
    )
}

EventoClick.propTypes = {
    value: PropTypes.number
}

export default EventoClick;


