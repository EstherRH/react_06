import React, {Component} from 'react';

const Props = (props) => {

    /*   En este punto se puede colocar código estándar de javaScript   */



    // a)
    // Componente Hello. Primera forma
    // se utiliza el parámetro u objeto props, con la propiedad title
    // se utlizan las llaves
    const Hello = (props) => {
        return <p>{props.title}</p>
    }

    // b)
    // Componente Yass. Segunda forma
    // Se utiliza el método Render: se devuelve el elemento que queremos renderizar
    class Yasss extends Component{
        render () {
            return <h2>{this.props.title}</h2>
        }
    }

    // c)
    // Componente Text. Con sintaxis de clases:
    class Text extends Component {
        render () {
            return <p>{this.props.text}</p>
        }

    }

    // d)
    // Componente Número. Con sintaxis de clases:
    // el elemento render solo puede devolver un elemento
    // Componente Booleano tmb:
    class Number extends Component {
        render () {
            const textoSegunBool = this.props.boolean ? 'Cierto' : 'Falso'
            return(
                <div>
                    <p>{this.props.text}</p>
                    <p>{this.props.number}</p>
                    <p>{textoSegunBool}</p>
                </div>
            )
        }

    }




    //Boolean
    class Boolean extends Component {
        render () {
            const textoBooleans = this.props.isActivated ? 'On!' : 'Off'

            return (
                <div>
                    <p>{textoBooleans}</p>
                </div>
            )
        }
    }

    // // Números
    // class Numbers extends Component {
    //     render () {
    //
    //         // se le pasa una función para multiplicar cada elemento por 2
    //         const mappedNumber = this.props.arrayOfNumber.map(n => n * 2)
    //         // otra forma de multiplicar: multiply1
    //         const mappedNumber1 = this.props.arrayOfNumber.map(this.props.multiply1)
    //
    //         return (
    //             <div>
    //                 {/*Se hace un join en el array de números, y le decimos que lo divida con una coma y un espacio*/}
    //                 <p>{this.props.arrayOfNumber.join(', ')}</p>
    //                 <p>{mappedNumber.join(', ')}</p>
    //                 <p>{mappedNumber1.join(', ')}</p>
    //                 <p>{this.props.objectWithInfo.key}</p>
    //             </div>
    //
    //         )
    //     }
    // }

    //Números (como la anterior pero más simplificada) Destructuración:
    class Numbers extends Component {
        render () {
            // Destructuración del objeto. todo ordenado en una constante:
            // Así se accede a todas las props que necesitamos en nuestro componente
            const {
                arrayOfNumber,
                multiply1,
                objectWithInfo,
                title
            } = this.props

            // en las dos siguientes funciones se elimina: "this.props"
            // se le pasa una función para multiplicar cada elemento por 2
            const mappedNumber = arrayOfNumber.map(n => n * 2)
            // otra forma de multiplicar: multiply1
            const mappedNumber1 = arrayOfNumber.map(multiply1)

            return (
                <div>
                    {/*Se hace un join en el array de números, y le decimos que lo divida con una coma y un espacio*/}
                    <p>{this.props.arrayOfNumber.join(', ')}</p>
                    <p>{mappedNumber.join(', ')}</p>
                    <p>{mappedNumber1.join(', ')}</p>
                    <p>{objectWithInfo.key}</p>

                    {/* tmb se pueden usar los propios Elementos de React como props */}
                    {title}
                </div>

            )
        }
    }




    /*   Todo lo que está dentro del return es lo que se va a mostrar   */
    return(
       <div className="App-header">

                {/*Para pasarle una propiedad al componente Hello, debemos pasarle el valor como si fuera el valor de una etiqueta html
    nada de esto es html!! es JSX*/}

                <Hello title='Podemos repetirlo varias veces'/>
                <Hello title='Hello from props'/>

                <Yasss title='Hello from yass' />

                <Text text='texto' />


                {/* Podemos pasarle una props llamada isActivated
                    se suelen separar dejando una props en cada línea
                    si hay muchas, se ordenan alfabéticamente     */}
                <Boolean
                    text='prueba con booleanos'
                    isActivated={false}
                    // si a "isActivated" no se le pasa ningún valor, da por hecho que es true, en nuesto caso: "on!"
                />


                <Number number={2} text='Esto es un número' boolean={true} />


                {/*  arrayOfNumber: Se abren los corchetes para crear el array
                     objectWithInfo: doble llaves (con las llaves propias del objeto dentro) */}
                <Numbers
                    arrayOfNumber={[2 ,3, 10]}
                    multiply1={(number) => number * 4}
                    objectWithInfo={{ key: 'First Value', key2: 'otherValue' }}
                    text='Números'
                    title={<h1>Este es el título</h1>}
                />
            </div>

    );
}

export default Props;