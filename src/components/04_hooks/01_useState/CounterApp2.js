

import React from "react";

// importamos el custom hook: useCounter
import { useCouter2 } from '../../../hooks/useCouter2';

const CounterApp2 = () => {

    // se desestructura lo que regresa nuestro --> "custom hook" --> useCouter2
    const { state, increment, decrement, reset } = useCouter2( 100 );

    return (
        <>
            <p> Counter with Hook: {state} </p>
            <hr/>

            {/*  el incremento va a ser de 2 en 2  */}
            <button className="btn" onClick={ () => increment(2) }> + 1 </button>
            <button className="btn" onClick={ reset }> Reset </button>
            <button className="btn" onClick={ () => decrement(2) }> - 1 </button>

        </>
    );
};
export default CounterApp2;




