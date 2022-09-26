
// useLayoutEffect (129)

import React from "react";
import {useFetch} from "../../hooks/useFetch";
import {useCouter1} from "../../hooks/useCouter1";
import '../04_00_hooks_useState/style.css'
import {Quote} from "./Quote";

const Layaout1 = () => {

    const { counter, increment } = useCouter1(1);
    const { loading, data } = useFetch( ` https://www.breakingbadapi.com/api/quotes/${ counter } `);
    // const { author, quote } = !!data && data[0];

    return (
        <div>
            <p> useFetch - Custom Hook </p>
            <hr/>


            {
                loading ?
                    (
                        <div className="alert alert-info text-center">
                            Loading...
                        </div>
                    ) : (
                        // <blockquote className=" blockquote text-right ">
                        //     <p className="mb-0"> Hello there! { quote } </p>
                        //     <footer className="blockquote-footer m-5"> - { author } </footer>
                        // </blockquote>
                    <Quote/>
                    )
            }

            <button
                className="btn btn-primary"
                disabled={ loading }
                onClick={ increment }
            >
                Siguiente quote
            </button>

        </div>
    );
};
export default Layaout1;

