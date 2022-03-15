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
  // * esta funcion lo que hara sera retornar una vista.
  // * En React usamos return () para indicar para lo que este dentro de los parentesis será el objeto visual que vamos a retornar
  // ! Importante: React solo puede retornar un componente a la vez
  // * Retorna un solo div
  return (
    <div>
      <h1>Hola Mundo</h1>
      <div>
        <h4>Hola Primer Componente</h4>
      </div>
    </div>
  );
};

/**
 *  * Luego de crear el componente debemos exportar 
 *  ! Es como decir que este archivo unicamente esta exportando este componente
 */

export default PrimerComponente;
