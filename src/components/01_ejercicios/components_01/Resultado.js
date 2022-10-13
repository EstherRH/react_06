
// Se crea este nuevo componente: resultado (Cantidad a pagar)
// Resultado cuadro resumen
// si la cantidad es 0, que no se muestre nada

import React from 'react'

const Resultado = ({cantidad, total, plazo}) => {
    return(
        <div>
            <p>Resumen</p>
            <p>Cantidad total: {cantidad} €</p>
            <p>A pagar en {plazo} meses</p>
            <p>Su pago mensual es de { (total/plazo).toFixed(2) } €</p>
            <p>Total a pagar { (total).toFixed(2) } €</p>
            {/*rendondear a decimales*/}
        </div>
    )
}

// { (total/plazo).toFixed(2) }
// al agregar llaves se pueden hacer operaciones en JS
// .toFixed(2) --> REDONDEA a 2 decimales

export default Resultado;



















