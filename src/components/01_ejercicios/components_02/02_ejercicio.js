
// importa el archivo de data_heroes

import {heroes} from './data_heroes';

import { useState} from "react";

export const getHeroeById = (id) => heroes.find( (heroe) =>  heroe.id)

const DataHeroes = (id) => {
    const [heroes, setHeroes] = useState('false');

    return (
        <div className="App">
            <p>heroes.id</p>

        </div>
    );
}

export default DataHeroes;


