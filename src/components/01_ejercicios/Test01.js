
import React, {useState} from "react";
import Header from "./components_01/Header";
import Header01 from "./components_01/Header01";
import Formulario from "./components_01/Formulario";
import Mensaje from "./components_01/Mensaje";
import Resultado from "./components_01/Resultado";
import Spinner from "./components_01/Spinner";
// import Props from "./components_01/Props";
import Header02 from "./components_01/Header02";


function Test01() {

    // En React los valores fluyen del padre al hijo pero no al revés
    // el state se puede pasar por varios componentes: fluye hacia formulario y otros componentes

    // useState
    // hay que importarlo arriba
    // se define un state para la cantidad
    // lo que sea interactivo tendrá state
    // El state retorna dos valores
    // así se leen valores en el formulario

    // se define un state para la cantidad
    // cantidad es: una VARIABLE que contiene el valor
    // cantidad va a tener el valor que se le pasa al state
    // guardarCantidad es la función para guardar o modificar el state
    // guardarCantidad es: una FUNCIÓN que va a ser utilizada para estar interactuando y guardando lo que es el state que estamos creando
    // al useState se le puede dar un VALOR INICIAL. En este caso empieza en cero
    // Puede empezar en true o false, números, string vacío, etc.

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [cantidad, guardarCantidad ] = useState(0);

    // const [plazo, guardarPlazo] = useState(0);

    // Plazo: contiene el valor
    // guardarPlazo: es la función que va a modificar la función
    // pasamos ambas al Formulario
    // leer los datos de un select
    // el plazo arranca en vacío
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [plazo, guardarPlazo] = useState(''); // se le indica que es un string vacío

    // Cantidad a pagar
    // Resumen de cuánto se va a pagar
    // se inicializa en 0
    // más abajo en <Formulario/> se pasa el total
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [total, guardarTotal] = useState(0);

    // Spinner
    // se inicia en false (cuando se inicia la app no va a salir en spinner
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [cargando, guardarCargando] = useState(true);


    // Cargar un componente de forma condicional
    // o Carga condicional de componentes
    // si el total es 0 --> mensaje
    // sino --> tabla con resultado
    let componente;

    if(cargando) {
        componente = <Spinner/>
    } else if ( total === 0 ) {
        componente = <Mensaje />
    } else {
        // Resultado final con los totales
        componente = <Resultado
            total = {total}
            plazo = {plazo}
            cantidad = {cantidad}
        />
    }



    return (
        // Siempre hay que retornar un elemento que retorne los demás elementos
        // el div engloba todo
        <div className="App">

            {/*  <Props />  */}

            {/*  El componente de Header se puede poner así:  */}
            <Header/>
            {/*  Es reutilizable: así que podemos pegar el Header múltiples veces
                también así para incluir los props
                "título" es la propiedad, se le asigna un valor: "Prueba uno".   Se le está colocando un string, tmb puede ser una función
                en Console: se pueden ver los props que se le pasan en Object: título y descripción
                Aparece todo el árbol de componentes: se puede ir clicando en cada uno de ellos  */}
            <Header
                titulo="Header 0"
                descripcion="Utiliza el formulario y obten una cotización"/>
            <Header01
                titulo="Header 1"
                cantidad={cantidad}
            />

            <Header02
                titulo="Header 2"
            />



            {/* Ya tenemos el Header
            En componentes: Ahora se crea un segundo componente: formulario
            Desde aquí se pasa la variable cantidad y la función
            Hay que pasar cantidad y guardarCantidad vía props

            sintaxis:
            props={variable}
            */}
            <Formulario
                cantidad={cantidad}
                guardarCantidad={guardarCantidad}
                plazo={plazo}
                guardarPlazo={guardarPlazo}
                total = {total}
                guardarTotal = {guardarTotal}
                guardarCargando = {guardarCargando}
            />

            {/*  Resultado:  */}
            {componente}

            {/*
            <div className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <a className="App-link" href="https://www.20minutos.es/"
                   target="_blank" rel="noopener noreferrer">
                    periódico
                </a>
                <p>Hola mundo</p>
            </div>
            */}


        </div>
    );
}

export default Test01;
