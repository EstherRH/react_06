
// useEffect:
// después de useState es el más usado

// es una función
// es muy útil cuando se quiere disparar efectos secundarios,
// es decir, algo cambió o se modificó, dispara esta función
// el componente se cargó por primera vez, dispara esta función
// etc.

// es un hook que permite ejecutar un efecto secundario cuando algo suceda en nuestros componentes

// ejemplo con  !!!  Simple Form  !!!
// https://bluuweb.github.io/react/formularios/#form


import React, {useEffect, useState} from "react";
import '../04_00_hooks_useState/style.css';
import {Message1} from "./UseEffectMessaje2";
// import Message from "./UseEffectMessage";
// import {Message1} from "./UseEffectMessaje2";

const SimpleForm = () => {

    // formState: pequeño formulario
    const [formState, setFormState] = useState({
        name: 'dd',  // objeto vacío,   es el name que aparece en el input, más abajo
        email: ''
    });

    // desestructurar:
    // se extraen las propiedades del objeto:
    const { name, email } = formState;


    // estructura:
    // dentro de las llaves: callback o función de retorno: es la que se va a ejecutar cada vez que el useEffect se dispare
    // deps [] --> array de dependencias --> son las condiciones por las cuales el useEffect se vuelva a disparar
    // deps [] --> si está vacío se va a disparar solo una vez
    // hacer una petición cuando el componente carga el custom hook
    useEffect(() => {
        // cuerpo

        return () => {
            // función de clean o limpieza
        }
    }, [])




    // recibe una función de flecha
    // el primer argumento es el Callback: es la función que se ejecuta cada vez que el useEffect se dispare
    // el segundo valor que se le manda: son las DEPENDENCIAS
    // es importante colocar las dependencias
    // deps: []  -->  si el array está vacío, el useEffect se va a disparar SOLO UNA VEZ
    useEffect( () => {
        // Función de retorno: regresa una función:
        // return;
    }, [] );


    // disparar el useEffect cada vez que el form cambie (solo el formulario)
    // dependencia: se le pasa el formState -->  porque queremos escuchar sus cambios
    // deps: [formState] --> se dispara cada vez que el formulario cambia
    // se recomienda crear un useEffect por cada acción que se quiera ejecutar
    // este efecto va a estar pendiente del formState
    // este efecto se dispara cada vez que haya un cambio en el formulario
    useEffect( () => {
        console.log('formState cambió');
    }, [formState] );


    // cuando el email cambia, se dispara
    // se recomienda crear un efecto en concreto para cada acción que se quiere ejecutar
    // o por cada efecto secundario que se quiere llamar
    // este efecto está pendiente del email
    useEffect( () => {
        console.log('email cambió');
    }, [email] );


    // target.name --> nombre
    // target.value --> valor del input (son números)
    // para que se pueda ver en el input, hay que llamar el setFormState
    // ({ target })  --> se extrae del evento el target
    // del target se extrae el name y el value
    //  ...formState, -->  se desestructura para mantener todos los valores del formulario
    const handleInputChange = ({ target }) => {
        setFormState({
            // objeto
            ...formState,
            // solo queremos cambiar a la que el name esté siendo modificada
            [ target.name ]: target.value
        });
    }


    return (
        <>
            <h3> useEffect <br/> ejemplo de Simple Form </h3>
            <hr/>

            {/*  clase de boostrap: form-group
             name="name" y name="email"  -->  está arriba
             value= { name }  -->  se coge de la desestructuración de arriba
             onChange={ handleInputChange }  --> arriba está definido

             */}

            <div className="form-group">
                <input type="text"
                       name="name" // atributo name
                       className="form-control" // clase de boostrap
                       placeholder="Tu nombre"
                       autoComplete="off"
                       value= { name }
                       onChange={ handleInputChange }
                />
            </div>
            <div className="form-group">
                <input type="text"
                       name="email" // atributo email..
                       className="form-control"
                       placeholder="email@gmail.com"
                       autoComplete="off"
                       value= { email }
                       onChange={ handleInputChange }
                />
            </div>

            {/*  CONDICIONAL
                 si el NAME existe --> entonces va a mostrar el Message:
                 en caso contrario, no se va a mostrar
                 importación de <Message />
                 arriba pondrían: name: 'dd',
                 si coincide aparece el mensaje de "Usuario ya existe"

              */}
            {/*{ name && <Message1 /> }*/}


            {/*  Otro ejemplo:
                  si name es igual a 123, se mostrará  */}
            { (name === '123')  && <Message1 /> }


            {/*  Message1  */}
            {/*{ name && <Message1 /> }*/}

        </>
    );
};
export default SimpleForm;












