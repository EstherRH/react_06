
import React from "react";
import Header from "./components_01/Header";
import Header01 from "./components_01/Header01";
import Header02 from "./components_01/Header02";


const Test02 = () => {
    return (
        <div className="App">
            <Header/>
            <Header
                titulo="Header 0"
                descripcion="Utiliza el formulario y obtén una cotización"/>

            <Header01
                titulo="Header 1"

            />
            <Header02
                titulo="Header 2"
            />
        </div>
    );
}

export default Test02;
