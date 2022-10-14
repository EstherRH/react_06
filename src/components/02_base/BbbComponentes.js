
// cómo imprimir variables en el html
// qué sucede cuando colocamos variables o constantes en nuestras etiquetas html (en el jsx)
// dentro del { ... } se puede poner expresión de JS que retorne un valor (pero no cualquier valor)

import React from "react";


const getResultado = () => {
    return 4+4;
}


const BbbCom = () => {

    const saludo = 'Hola mundo const'  // constante con el nombre de saludo
    const num = 123
    const num1 = "456"
    const verdad = true
    const array = [1,2,3,4,5]   // concatenación de elementos

    // objeto
    const newMessage = {
        nombre: 'Esther',
        edad: 34
    }

    const getResultado1 = (a, b) => {
        return a*b;
    }

    return (
        <>
            {/*  imprime la variable en el html
              Dentro de las llaves:
                se coloca cualquier expresión de JS que retorne un valor
                dentro se coloca una expresión permitida de JS que no sea un objeto
              */}
            <p> { saludo } </p>
            <p> { num } </p>
            <p> { num1 } </p>
            <p> { verdad } </p>  {/*este no se va a imprimir*/}
            <p> { array } </p>

            {/* se llama a la función getResultado, que está definida arriba */}
            <p> { getResultado() } </p>    {/* 8 */}
            <p> { getResultado1(2, 5) } </p>   {/* 10 */}

            {/*<p> { newMessage } </p> esto daría error*/}
            <p> { newMessage.nombre } </p>
            <p> { newMessage.edad } </p>

            {/*JSON.stringify() --> convierte el objeto a string*/}
            {/*etiqueta pre y code
            Rdo: aparece en el html como un objeto
            */}
            <pre> { JSON.stringify( newMessage, null, 3 ) } </pre>
            <code> { JSON.stringify( newMessage, null, 3 ) } </code>
            <p className="">Hello there</p>
        </>
    );
};
export default BbbCom;
