
// app.js es el archivo principal

import React from "react";
import '../src/App.css';
// import Test01 from "./components/Test01";
// import Pruebas from "./Pruebas";
// import VariablesConstantes from "./components/components_02/01_var_constantes";
// import ModalPrueba from "./components/components_02/ModalPrueba";
// import BbbCom from "./components/02_base/BbbComponentes";
// import PrimeraApp from "./components/02_base/AaaComponentes";
// import AaTeorA from "./components/02_base/AaTeorA";
// import BbbProps from "./components/02_base/BbbProsp";
// import BbbPropsTypes from "./components/02_base/BbbPropTypes";
// import CounterApp from "./components/02_base/CounterApp";
// import EventoClick from "./components/03_eventos/EventoClick";
// import Base from "./components/04_00_hooks_useState/AaBase";
// import Aaaa from "./components/navbar/Aaa";
import GifApp from "./components/05_gifAppBuscador/GifExpertApp";
import CounterAppUseState from "./components/04_00_hooks_useState/UseState";
import CounterApp1 from "./components/04_00_hooks_useState/CounterApp1";
import CounterApp2 from "./components/04_00_hooks_useState/CounterApp2";
// import UseEfecct from "./components/04_00_hooks_useEffect/UseEfecct";
// import MultipleCustomHook from "./components/04_01_useFetch/MultipleCustomHooks";
// import SimpleForm from "./components/04_00_useEffect/UseEfecct";
// import FormWithCustomHook from "./components/04_00_useEffect/FormWithCustomHook";
// import Login from "./components/formularios/form";
// import Basic from "./components/formularios/form2/Basic";
// import Val from "./components/formularios/form3/Val";
// import Formulario from "./components/formularios/form4/Formulario";
// import FocusScreen from "./components/04_02_useRef/FocusScreen";
import Layaout1 from "./components/04_03_useLayaoutEffect/Layout1";
import Correo from "./components/04_02_useRef/CorreoWow";
import Autocomplete from "./components/autocomplete/Autocomplete";


function App() {

    return (

        <div className="App">

            {/*<Test01/>*/}
            {/*<VariablesConstantes/>*/}
            {/*<Pruebas/>*/}
            {/* seguir este ejercicio  <DataHeroes/>*/}
            {/*<ModalPrueba/>*/}
            {/*<PrimeraApp />*/}
            {/*<BbbCom />*/}
            {/*<BbbProps/>*/}
            {/*<BbbPropsTypes/>*/}
            {/*<AaTeorA/>*/}
            {/*<CounterApp/>    /!*Ejercicio*!/*/}
            {/*<EventoClick/>*/}
            {/*<Base/>*/}
            {/*<Aaaa/>*/}
            <GifApp/>
            {/*<CounterAppUseState/>*/}
            {/*<CounterApp1/>*/}
            {/*<CounterApp2/>*/}
            {/*<UseEfecct/>*/}
            {/*<FormWithCustomHook/>*/}
            {/*<MultipleCustomHook/>*/}
            {/*<FocusScreen/>*/}
            {/*<SimpleForm/>*/}
            {/*<Login/>*/}
            {/*<Basic/>*/}
            {/*<Val/>*/}
            {/*<Formulario/>*/}
            {/*<Layaout1/>*/}
            {/*<Correo/>*/}
            <Autocomplete/>
        </div>
    );
}

export default App;
