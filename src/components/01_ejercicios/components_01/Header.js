// componente de Header

import React from 'react';

// se le pasa props para poder leer Header en app.js
function Header(props) {

    /*   En este punto se puede colocar CÓDIGO estándar de javaScript   */

    console.log(props)


    /*   Todo lo que está dentro del return es lo que se va a mostrar en pantalla
    *     es código JSX: mezcla de HTML y javaScript
    *    */
    return(
        // se envuelve todo dentro de un div porque se devuelve varios elementos
        <div className="header_container">
            <p>Hola mundo</p>

            {/*   Cómo acceder a los props: { props.titulo }
             es html pero lo que está dentro de las llaves {  } se interpreta como código JS
             se le pueden pasar varios props
             aquí tendríamos DOS props:
             */}
            <h1>{ props.titulo }</h1>
            <p>{ props.descripcion }</p>
        </div>
    );
}

export default Header;



//se puede aplicar destructuring:

 /*

 function header(titulo) {
    return(
        <div>
            <h1>{ titulo }</h1>
        </div>
    );
}
export default header;

*/