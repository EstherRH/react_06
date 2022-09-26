
// hook: useRef
// sirve para manejar el valor de alguna variable
// no dispara renderizaciones cuando se hace un cambio
// es como useState que no dispara la renderización de nuevo
// sirve para mantener una referencia a una posición inicial

import React, {useRef} from "react";
import '../04_00_hooks_useState/style.css'

const FocusScreen = () => {

    // valor inicial vacío
    // permite mantener alguna referencia y que cuando cambia no se dispare una renderización del componente
    // useRef devuelve un objeto ref mutable cuya propiedad   .current   se inicializa
    // con el argumento pasado (initialValue).
    // El objeto devuelto se mantendrá persistente durante la vida completa del componente.
    const inputRef = useRef();

    // función al hacer click en el botón
    const handleClick = () => {
        // primera forma: buscar el input
        // pone el foco y selecciona el input
        // si hay varios, va a coger el primero
        // document.querySelector('input').select();

        // segunda forma
        // CURRENT hace referencia al valor actual
        // current es lo que imprime el useRef en consola
        inputRef.current.select();
    }

    return (
        <div>
            <h1> useRef - Focus Screen </h1>
            <hr/>

            {/*  ref se pone como referencia al input
             se establece el foco en el input cuando se presiona el botón
             */}
            <input
                ref={ inputRef } // referencia al useRef
                type="text"
                className="form-control" // clase de boostrap
                placeholder="Nombre"
            />

            {/* al darle al botón, hace foco en el input */}
            <button
                className="btn btn-outline-primary mt-5"
                onClick={ handleClick }
            >
                Focus
            </button>

        </div>
    );
};
export default FocusScreen;

