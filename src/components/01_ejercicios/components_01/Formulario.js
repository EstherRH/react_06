
// objetivo: Cotizador de préstamos
// crear un formulario

// plazo a pagar: tiempo e intereses
// si se tarda más tiempo en pagar, el interés será mayor
// se integra código JS en react
// tiene tmb un spinner
// al final se presenta un html con un Resumen
// JSX --> className (es una clase)
// class es una palabra reservada de js

// en app.js  -->  import Formulario from "./components/Formulario";

import React, {useState} from "react";
import './Formulario.css';
import { calcularTotal } from "../../../helpers/helpers";

// Formulario: la primera en mayúsculas
// se le pasa props
const Formulario = (props) => {

    // destructuring
    const {cantidad, guardarCantidad, plazo, guardarPlazo, guardarTotal, guardarCargando } = props;


    // useState('false');
    // Definir el state
    // se importa arriba  -->  import React, {useState} from "react";
    // ejemplo: tenemos un state para un mensaje de error
    // se inicializa en false porque no hay error hasta que el usuario hago algo mal
    const [error, guardarError] = useState('false');


    // se define la función
    // se utilizan los eventos
    // es un arrow function
    // en el input: onChange={ leerCantidad }
    // onChange: se va a ejecutar cada vez que el usuario comience a escribir en el input
    // se va a ejecutar la función de leerCantidad cada vez que hay un cambio
    // e --> para acceder al valor ( es el evento )
    // e.target.value --> acceder a lo que el usuario está escribiendo
    // guardarCantidad --> es la función que va a cambiar el state
    const leerCantidad = (e) => {
        guardarCantidad( parseInt( e.target.value ));
    }


    // se coloca en el select
    // onChange={ leerPrestamos }
    const leerPrestamos = (e) => {
        guardarPlazo( parseInt( e.target.value ) )
    }



    // Creamos la función: cuando el usuario hace submit
    // e de evento
    const calcularPrestamo = e => {
        e.preventDefault();
        console.log('enviando...');

        // Primero: Validar
        //  cantidad inicializa en 0 y plazo en un string vacío
        if( cantidad === 0 || plazo === '') {
            console.log('error');
            guardarError(true); // en caso de que haya un error, pasa a true (se inicializa en false)
            // cambia el estado del state ( de false a true)
            // tmb tiene que mostrar el mensaje cuando sea true
            return; // Resultado: 04_00_hooks_useState: state: true
        } else {
            console.log('ok');
            guardarError(false);


            // Habilitar el spinner (*1) TRUE
            guardarCargando(true);

            // Postponer 3 segundos para que aparezca el spinner
            setTimeout( () => {
                // Realizar la cotización
                // se le pasa cantidad y plazo
                // variable de total
                const total = calcularTotal(cantidad, plazo);
                console.log(total);

                // Una vez calculado, guardarTotal
                guardarTotal(total);

                // Deshabilitar el spinner (*1) FALSE
                guardarCargando(false);

            }, 3000)
        }
    }


    return (
        <div>
            {/* type="submit" --> evento cuando el usuario presiona el botón de enviar los datos:
             onSubmit={calcularPrestamo}
             función: calcularPrestamo
             */}
            <form onSubmit={calcularPrestamo}>
                <p>La cantidad es de {cantidad}</p>
                <p>El plazo es de {plazo}</p>
                {/*Resultado: 0, porque es el valor inicial del state*/}
                <div className="row">
                    <div>
                        <label>Cantidad Prestamo</label>

                        {/* se accede a lo que el usuario escribe en lo inputs */}
                        <input className="u-full-width"
                               type="number"
                               placeholder="Ejemplo: 3000"

                            // es un evento:
                            // leerCantidad es una función que se va a ejecutar
                               onChange={ leerCantidad }
                        />
                    </div>
                    <div>
                        {/* Segundo campo del formulario: plazo para el préstamo */}
                        <label>Plazo para Pagar</label>
                        <select
                            className="u-full-width"
                            onChange={ leerPrestamos }
                        >
                            <option value="">Seleccionar</option>
                            <option value="3">3 meses</option>
                            <option value="6">6 meses</option>
                            <option value="12">12 meses</option>
                            <option value="24">24 meses</option>
                        </select>
                    </div>
                    <div>
                        {/*  leer un submit y validar un formulario  */}
                        <input type="submit"
                               value="Calcular"
                               className="button-primary u-full-width"/>
                    </div>
                </div>
            </form>

            {/* si error está en true, sale el mensaje, en caso contrario, no ejecutar nada */}
            { (error === true) ? <p>Todos los campos son obligatorios</p> : ''}

        </div>
    );
}

export default Formulario;




