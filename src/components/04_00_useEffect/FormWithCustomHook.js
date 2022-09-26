
// formulario con custom hook (122)

// se crea un custom hook que nos ayude a manejar el formulario
// va a ser: hooks/useForm.js

// más info: https://react-hook-form.com/get-started

import React, {useEffect} from "react";
import '../04_00_hooks_useState/style.css'
import {useForm} from "../../hooks/useForm";

const FormWithCustomHook = () => {

    // se cambia el useState por el useForm
    // se le pasa formValues y la función handleInputChange
    // se desestructura y viene de useForm
    // se importa arriba
    // se coloca un on delante por buenas prácticas
    const { formState, onInputChange, onResetForm, username, email, password } = useForm({
        username: '',  // objeto vacío,   es el name que aparece en en input, más abajo
        email: '',
        password: ''  // se agrega el password
    });


    // lo que está comentando: ahora está en el custom hook
    // const { username, email, password } = formState;

    // esta función se coloca en el custom hook
    // se puede extraer la lógica
    // así se podría implementar la función en varios formularios
    // const onInputChange = ({ target }) => {
    //     setFormState({
    //         ...formState,
    //         [ target.username ]: target.value
    //     });
    //
    // }


    return (

        // se actualiza del fragment a form
        // el submit es la función handleInputChange
        <form onSubmit={onResetForm}>
            <p> Simple Form CUSTOM Hook </p>
            <hr/>

            <div className="form-group">
                <input type="text"
                       name="username"
                       className="form-control"
                       placeholder="Tu nombre"
                       autoComplete="off"
                       value= { username }
                       onChange={ onInputChange }
                />
            </div>
            <div className="form-group">
                <input type="text"
                       name="email"
                       className="form-control"
                       placeholder="email@gmail.com"
                       autoComplete="off"
                       value= { email }
                       onChange={ onInputChange }
                />
            </div>
            {/* input  -->  agregamos password */}
            <div className="form-group">
                <input type="password"
                       name="password"
                       className="form-control"
                       placeholder="*****"
                       value= { password }
                       onChange={ onInputChange }
                />
            </div>

            {/*  añadimos el botón
            reset: restablece los valores al punto inicial
            */}
            <button
                type="submit"
                className="btn btn-primary"
                onClick={ onResetForm }>
                Borrar
            </button>

        </form>
    );
};
export default FormWithCustomHook;



