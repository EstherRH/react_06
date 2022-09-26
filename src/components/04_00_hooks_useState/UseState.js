
// ejercicio de counterApp.js

import React, { useState} from "react";
import './style.css';

const CounterAppUseState = () => {

    // el useState va a ser un objeto
    const [ state, setState] = useState({
        counter1: 10,
        counter2: 20,
        counter3: 30,
        counter4: 40,
    })

    // desestructuración
    // así se extraen los 4 counters de state
    // desde state ( que es la variable )
    const { counter1, counter2, counter3, counter4 } = state;

    return (
        <>
            <h1> Counter1 { counter1 } </h1>
            <h1> Counter2 { counter2 } </h1>
            <h1> Counter3 { counter3 } </h1>
            <h1> Counter4 { counter4 } </h1>


            {/*  el ejemplo es con counter1 y counter4  */}
            {/*  se modifica el counter 1: suma  */}
            <button className="btn btn-primary"
                    onClick={ () => {
                        setState( {
                            ...state,
                            counter1: counter1 + 1
                        });
                        // ...state --> se utiliza el spread operator dentro del objeto para no perder lo que ya estaba definido
                        // se llama al setState y le decimos: mantén lo que ya estaba y además suma 1

                    }}>
                +1
            </button>

            {/*  se modifica el counter 4: resta  */}
            <button className="btn btn-primary"
                    onClick={ () => {
                        setState({
                            ...state,
                            counter4: counter4 - 1
                        });
                    }}>
                -1
            </button>
        </>
    )}

export default CounterAppUseState;











