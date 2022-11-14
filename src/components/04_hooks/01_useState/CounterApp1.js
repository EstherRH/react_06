
// hacer click en un botón y que se incremente el contador

import React from "react";

// importamos el custom hook: useCounter
import { useCouter1 } from '../../../hooks/useCouter1';

const CounterApp1 = () => {

    // se desestructura lo que regresa nuestro --> "custom hook" --> useCouter1
    const { counter, increment, decrement, reset } = useCouter1( 100 );

    return (
        <>
            <p> Counter with Hook: {counter} </p>
            <hr/>

            {/*  el incremento va a ser de 2 en 2  */}
            <button className="btn" onClick={ () => increment(2) }> + 1 </button>
            <button className="btn" onClick={ reset }> Reset </button>
            <button className="btn" onClick={ () => decrement(2) }> - 1 </button>

        </>
    );
};
export default CounterApp1;




