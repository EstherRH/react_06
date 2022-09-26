
// nuevo componente: AddCategory
// input para agregar la categoría

import React, {useState} from "react";
import PropTypes from 'prop-types';

// aquí se recibe el setCategories
// setCategories: se utiliza abajo en Proptypes
const AddCategory = ({ setCategories }) => {

    // estado inicial: string vacío --> ('') --> para que no de error
    const [inputValue, setInputValue] = useState('');

    // función para onChange
    const handelInputChange = ( e ) => {
        setInputValue( e.target.value );
    }

    const handleSubmit = ( e ) => {
        e.preventDefault(); // prevenir comportamiento por defecto

        // validación
        // .trim() --> se borran los espacios en blanco que pueda tener antes y después
        // length > 2 -->  si es mayor a 2 caracteres, sino no deja insertar
        if ( inputValue.trim().length > 2 ) {

            // se recibe como argumento: setCategories
            // se llama a: setCategories
            // primero aparece la última búsqueda, y por debajo, las búsquedas anteriores
            setCategories( cats => [ inputValue, ...cats] );

            // para que no haga un doble posteo:
            setInputValue('');
        }
    }



    return (
        <>
            <p> Hey { inputValue } ! </p>
            <form onSubmit={handleSubmit}>

                {/*  atributos: type, value, onChange
                  onChange: se dispara cada vez que la caja de texto cambia
                  se llama la función:   handelInputChange
                  */}
                <input type="text"
                       value={ inputValue }
                       onChange={ handelInputChange }
                />
            </form>
        </>
    );

};
export default AddCategory;

// func: función
AddCategory.prototype = {
    setCategories: PropTypes.func.isRequired
}







