
// useLayoutEffect (129)

import React, {useLayoutEffect, useRef, useState} from "react";
import '../04_00_hooks_useState/style.css'
import {useCouter1} from "../../hooks";
import {useFetch} from "../../hooks/useFetch";

export const Quote = () => {

    // useRef
    const pRef = useRef();
    // tamaño original de la caja:
    const [boxSize, setBoxSize] = useState({ width: 0, height: 0 });
    const { counter, increment } = useCouter1(1);
    const { loading, data } = useFetch( ` https://www.breakingbadapi.com/api/quotes/${ counter } `);
    const { author, quote } = !!data && data[0];

    // nuevo:
    // objetivo: cambiar el tamaño
    // .current --> para tomar el valor actual
    useLayoutEffect(() => {
        const { height, width } = pRef.current.getBoundingClientRect();
        setBoxSize({ height, width });
    }, [quote])
    // la dependencia se dispara cada vez que el quote cambia

    return (
        <div>
            <blockquote className=" blockquote text-right "
                        style={{ display: 'flex' }}
            >
                {/* referencia: pRef */}
                <p ref={ pRef } className="mb-1"> Hello there! { quote } </p>
                <footer className="blockquote-footer m-5"> - { author } </footer>
            </blockquote>

            <button
                className="btn btn-primary"
                disabled={ loading }
                onClick={ increment }
            >
                Siguiente quote
            </button>

            <code>
                { JSON.stringify(boxSize) }
            </code>

        </div>
    );
};
