
// app.js es el archivo principal

import React from "react";
import '../src/App.css';
// import Test01 from "./components/01_ejercicios/Test01";
// import Test02 from "./components/01_ejercicios/Test02";
// import Initial from "./Initial";
// import VariablesConstantes from "./components/components_02/01_var_constantes";
// import ModalPrueba from "./components/components_02/ModalPrueba";
// import BbbCom from "./components/02_base/BbbComponentes";
// import PrimeraApp from "./components/02_base/AaaComponentes";
// import BbbProps from "./components/02_base/BbbProps";
// import BbbPropsTypes from "./components/02_base/BbbPropTypes";
// import EjercicioCounterApp from "./components/02_base/CounterApp";
// import Lista from "./components/01_ejercicios/lista map/Lista";
import EventoClick from "./components/03_eventos/EventoClick";
// import Base from "./components/01_useState/AaBase";
// import Aaaa from "./components/navbar/Aaa";
// import GifApp from "./components/05_gifAppBuscador/GifExpertApp";
// import CounterAppUseState from "./components/01_useState/UseState";
// import CounterApp1 from "./components/01_useState/CounterApp1";
// import CounterApp2 from "./components/01_useState/CounterApp2";
// import UseEfecct from "./components/04_00_hooks_useEffect/UseEfecct";
// import MultipleCustomHook from "./components/03_useFetch/MultipleCustomHooks";
// import SimpleForm from "./components/02_useEffect/UseEfecct";
// import FormWithCustomHook from "./components/02_useEffect/FormWithCustomHook";
// import Login from "./components/formularios/form";
// import Basic from "./components/formularios/form2/Basic";
// import Val from "./components/formularios/form3/Val";
// import Formulario from "./components/formularios/form4/Formulario";
// import FocusScreen from "./components/04_useRef/FocusScreen";
// import Layaout1 from "./components/05_useLayaoutEffect/Layout1";
// import Correo from "./components/04_useRef/CorreoWow";
// import Autocomplete from "./components/autocomplete/Autocomplete";
// import SelectDemo from "./components/autocomplete2/autoc";
import Pruebas from "./components/Pruebas";


function App() {

    return (

        <div className="App">

            <Pruebas />

            {/*<Test01/>*/}
            {/*<Test02/>*/}
            {/*<PrimeraApp/>*/}
            {/*<BbbCom />*/}

            {/* se pasa del componente padre al hijo */}
            {/*<BbbProps saludo1="11233"/>*/}

            {/*<BbbPropsTypes hey={"hellooo"} subtitulo={"dd"}/>*/}
            {/*<VariablesConstantes/>*/}
            {/*<Initial/>*/}
            {/* seguir este ejercicio  <DataHeroes/>*/}
            {/*<ModalPrueba/>*/}
            {/*<EjercicioCounterApp value={10} value1={103}/>    /!*Ejercicio*!/*/}
            <EventoClick/>
            {/*<Base/>*/}
            {/*<Aaaa/>*/}
            {/*<GifApp/>*/}
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
            {/*<Autocomplete/>*/}
            {/*<SelectDemo/>*/}
            {/*<Lista/>*/}
        </div>
    );
}

export default App;
