
import React from "react";
import {useFetch} from "../../../hooks/useFetch";
import {useCouter1} from "../../../hooks/useCouter1";
import '../01_useState/style.css'

const MultipleCustomHook = () => {

    const { counter, increment } = useCouter1(1);
    const { loading, data } = useFetch( ` https://www.breakingbadapi.com/api/quotes/${ counter } `);
    const { author, quote } = !!data && data[0];

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
                        <blockquote className=" blockquote text-right ">
                            <p className="mb-0"> Hello there! { quote } </p>
                            <footer className="blockquote-footer m-5"> - { author } </footer>
                        </blockquote>
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
export default MultipleCustomHook;

