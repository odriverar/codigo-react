import { useState } from "react";
/**
 *  * este será un componente el cual nos renderizara un formulario de registro.
 */
const FormRegister = () => {
    // como podemos capturar el valor de input
    const [name, setName] = useState("");
    const [apellido, setApellido] = useState("");
    
    // * En react la forma en la cual obtenemos el valor de un input es usando el onChange, este evento nos va a permitir capturar el valor de los inputs y guardarlo en una variable
    /**
     *  !Recordemos que con event podemos obtener el valor del input 
     *  * event = event.target.value
     *  ? Vamos a hacer una funcion la cual cada vez que se ejecute el onChange se llame y modifique el valor de la variable
     */

    const handleInputName = (event) => {
        // Que hacer para poder dar el valor al nombre
        setName(event.target.value);
    }

    const handleInputApellido = (e) => {
        setApellido(e.target.value);
    }

    return (
        <div>
            <form action="">
                <h4>Formulario de registro</h4>
                <h4>Nombre {name} {apellido}</h4>
                <p>
                    <input type="text" onChange={handleInputName} placeholder="Ingrese su nombre" />
                </p>
                <p>
                    <input type="text" onChange={handleInputApellido} placeholder="Ingrese su apellido" />
                </p>
                <p>
                    <input type="email" placeholder="Ingrese su email" />
                </p>
                <p>
                    <input type="password" placeholder="Ingrese su password" />
                </p>
                <button type="submit">Registrar</button>
            </form>
        </div>
    );
};

export default FormRegister;
