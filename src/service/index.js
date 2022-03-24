// * Archivo donde almacenaremos las peticiones.
// ? Una buena practica es tener la URL del API en una Variable.

const BASE_URL = "https://pokeapi.co/api/v2/pokemon?limit=700";

// Podemos crear una funcion generica la cual se encargue de hacer una peticion

// como basicamente tenemos que hacre la peticion a 2 url haremos una condicion donde vamos a recibir la URL 
// que puede ser la que lista o la que nos da el detalle
// ! url será el parametro que reciba la url hacia donde se hara la petición.

export const getDataFromPokemon = async (url = BASE_URL) => {
    try {
        // Ahora debemos ejecutar el fetch
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error.message);
    };
};

