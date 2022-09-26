
// CLASS

// Declarando una variable de estado
// En una clase, inicializamos el estado count a 0 estableciendo this.state a { count: 0 } en el constructor:
//
//     class Example extends React.Component {
//         constructor(props) {
//             super(props);
//             this.state = {
//                 count: 0
//             };
//         }


// FUNCTION

// En un componente de función no existe this por lo que no podemos asignar o leer this.state. En su lugar, usamos el Hook useState directamente dentro de nuestro componente:
//
// import React, { useState } from 'react';
//
// function Example() {
// // Declaración de una variable de estado que llamaremos "count"
// const [count, setCount] = useState(0);



