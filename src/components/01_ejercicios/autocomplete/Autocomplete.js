import './Autoc.css';
import Autosuggest from 'react-autosuggest'; // instalar
import { useState } from 'react';

// array con los datos: personajes de marvel
const data = [
  { personaje: "Spider Man" },
  { personaje: "Iron Man" },
  { personaje: "Viuda negra" },
  { personaje: "Capitana marvel" },
  { personaje: "She Hulk" },
  { personaje: "Wonder Woman" },
  { personaje: "Capitan América" },
  { personaje: "Wanda" },
  { personaje: "Bruja Escarlata" },
  { personaje: "Thanos" },
  { personaje: "Pantera negra" },
  { personaje: "Thor" },
  { personaje: "Doctor Strange" },
];

// autocomplete --> el navegador predice el valor, basándose en los datos del array
// se puede hacer un array o buscando datos en una api
const Autocomplete = () => {
  const[personajes, setpersonajes]= useState(data); // info de los personajes (data)
  const[value, setValue]= useState("");   // valor del input, valor inicial --> string vacío
  const[personajeSeleccionado, setpersonajeSeleccionado]= useState({});  // personaje que se ha seleccionado --> en el autocomplete se puede seleccionar un valor
  // tmb está vacío ya que al principio no se selecciona ningún valor

  const onSuggestionsFetchRequested=({value})=>{
    setpersonajes(filtrarpersonajes(value));
  }
  // objeto --> value

  // se llama a la siguiente función:
  // filtro de personajes
  // value --> recibe como parámetro el valor del input
  const filtrarpersonajes=(value)=>{
    const inputValue=value.trim().toLowerCase(); // convertir todo a minúsculas. trim: se quitan espacios de inicio y final
    const inputLength=inputValue.length;  // si la longitud es igual a 0, retorna vacío

    let filtrado=data.filter((personaje)=>{
      let textoCompleto=personaje.personaje;

      // Propiedad: copiar y pegar: quitar tildes
      if(textoCompleto.toLowerCase()
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .includes(inputValue)){
        return personaje;
      }
    });

    // en caso de que el input esté vacío, para que no marque error:
    // si la longitud es igual a 0, retorna vacío
    // ternario:
    return inputLength===0 ? [] : filtrado;
  }

  // se manda llamar cada vez que se borran las sugerencias
  const onSuggestionsClearRequested = () =>{
    setpersonajes([]);
  }

  const getSuggestionValue=(suggestion)=>{
    return `${suggestion.personaje}`;
  }

  // html que se va a mostrar:
  const renderSuggestion=(suggestion)=>(
      <div className='sugerencia' onClick={()=>seleccionarpersonaje(suggestion)}>
        {`${suggestion.personaje}`}
      </div>
  );

  const seleccionarpersonaje=(personaje)=>{
    setpersonajeSeleccionado(personaje); // se establece el personaje selecionado
  }

  // e de evento y nuevo valor del input
  const onChange=(e, {newValue})=>{
    setValue(newValue); // se le pasa el nuevo valor
  }

  const inputProps={
    placeholder:"Nombre del personaje", // valor por defecto
    value,     // valor del input. está establecido arriba. línea 26
    onChange   // método onChange
  };

  // validación cuando se le da al enter
  // recibe un evento
  const eventEnter=(e)=>{
    if(e.key == "Enter"){
      var split = e.target.value.split('-');
      var personaje ={
        personaje: split[0].trim(),
      };
      seleccionarpersonaje(personaje);
    }
  }

  return (
      <div className="App">
        <Autosuggest
            suggestions={personajes} // sugerencias que se van a mostrar en el autocomplete. // personajes importa la info del data
            onSuggestionsFetchRequested={onSuggestionsFetchRequested} // se llama cada vez que se recalcula las sugerencias
            onSuggestionsClearRequested={onSuggestionsClearRequested} // se manda llamar cada vez que se borran las sugerencias
            getSuggestionValue={getSuggestionValue} // cuál debe de ser el valor de entrada cuando se hace click en la segurencia
            renderSuggestion={renderSuggestion} // indica cómo se van a mostrar las sugerencias
            inputProps={inputProps}             // configuración del input: requiere el value (valor del input) y el método onChange (que se ejecuta cada vez que cambia de valor)
            onSuggestionSelected={eventEnter}   // propiedad que se ejecuta cuando se selecciona una sugerencia con mouse o teclado. se activa al darle al enter
        />
      </div>
  );
}

export default Autocomplete;