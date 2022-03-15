// Paso 1 importar useState from react.
import {useState} from "react";


/**
 *  * Como crear un componente desde 0
 *  ! Antes import REACT esra obligatorio, pero desde la version 17, esa linea no hace falta
 *  @param import React from "react";
 *  * <<<<<<<<<<<<<<<<<<<<<<<<<   >>>>>>>>>>>>>>>>>>>>>>>>>>>
 *  * El primer paso para definir un componente es el nombre.
 *  ? El nombre de un componente, siempre debe iniciar en Mayuscula.
 *  * El componente basicamente es una funcion, por ende podemos crearlo 
 *  * usando function o arrow function.
 */

const PrimerComponente = () => {
  /** 
   *  ! Como usar una variable en un componente 
   *  * React tiene una funcion llamada useState
   *  ? useState es una funcion intenra de react la cual se encarga de manejar el estado de las Variables
   *  ! Para poder usar useState, debemos importarla desde React-    
   *  * Al usar useState la forma en la cual creamos una variable cambia, porque debemos definir dos cosas:
   *  ? Primero el nombre de la Variable 
   *  ? Segundo la funcion que se encarga de cambiar el estado de la variable.
   *  ! count: Es la variable que usaremos para poder mostrar el valor
   *  ! setCount: es la funcion que se encarga de poder asignarle un valor a count
   * 
   *  ? Para poder definir esta varieble como parte de useState, debemos inicializar el valor de esta variable usando useState
   * 
   *  ! Ojo el valor que va dentro de useState sera el valor inicial de la variable.
   * 
   *  @param 
   */
  const [count, setCount] = useState(0);

  // * esta funcion lo que hara sera retornar una vista.
  // * En React usamos return () para indicar para lo que este dentro de los parentesis será el objeto visual que vamos a retornar
  // ! Importante: React solo puede retornar un componente a la vez
  // * Retorna un solo div

  // Vamos a cerar dos funciones una para sumar y otra para restar 
  // Estas dos funciones estan cambiando el estado de la variable count
  
  const sumar = () => {
    setCount(count + 1);
  }

  const restar = () => {
    setCount(count -1);
  }


  return (
    <div>
      <h1>Hola Mundo</h1>
      <div>
        <h4>Hola Primer Componente {count}</h4>
        {/* vamos a crear dos botones, uno para poder sumar 1 a count y otro para restar */}
        <button onClick={sumar}>Sumar</button>
        <button onClick={restar}>Restar</button>
      </div>
    </div>
  );
};

/**
 *  * Luego de crear el componente debemos exportar 
 *  ! Es como decir que este archivo unicamente esta exportando este componente
 */

export default PrimerComponente;
