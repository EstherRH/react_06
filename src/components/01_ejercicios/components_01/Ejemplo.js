// Funciones puras
// recibe los parámetros a y b, y devuelve una suma
// es pura porque siempre devuelve el mismo resultado para los mismo parámetros de entrada
// y porque la lógica de la función no produce efectos colaterales fuera de ella

function sumaPura (a, b) {
    return a + b;
}

// En React tiene que funcionar como funciones purar y no modificar sus propiedades
// Toda esta explicación es para entender que en React se usan los componentes como si fueran funciones puras
// y sus parámetros son las props





// Funcion impura
// Devuelve la suma de los parámetros más un número aleatorio
// El resultado es diferente cada vez

function sumaImpura (a, b) {
    return a + b + Math.random();
}

let b = 2
function sumaImpura2 (a) {
    b = a + b;
    return b
}






