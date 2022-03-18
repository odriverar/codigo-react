// En material existe un tag llamando container
import { useEffect, useState } from "react";
import { Container, Card, CardContent, CardMedia, Grid } from "@mui/material";
import { getDataFromPokemon } from "../../service";
import PokemonDetail from "../../components/PokemonDetail"

/**
 *  * Vamos a ver como ejecutar la funcion que se encarga de traer los pokemones
 */

const Home = () => {
  const imgUrl = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/";
  // Vamos a crear una variable el que se encargara de guardar la lisa de pokemones
  const [pokemons, setPokemons] = useState([]);

  // Debemos crear una funcion que se encargara de ejecutar a getDataFromPokemon y la data que retorne guardarla usando setPokemons

  const fetchPokemonList = async () => {
    const listaPokemones = await getDataFromPokemon();
    // Como ya recuperamos la lista de pokemones, usaremos la funcio setPokemons para guardar la lista  en Pokemons
    console.log("listaPokemones.results", listaPokemones.results);
    setPokemons(listaPokemones.results);
  }

  /**
   *  * En react existe una funcion useEffect el mismo que se ejecuta cuando la pagina esta iniciando.
   *  Vamos a usar useEffect, si queremos ejecutar algo al inicio de la app
   *  ! La estructura de useEffect es:
   *  @function useEffect(() => {})
   */

  useEffect(() => {
    // Aca llamamos a la funcion que queremos ejecutar
    fetchPokemonList();
    // ! IMPORTANTE: por ahora en los useeffect debemos colocar un array vacio
    // ! esto se hace para evitar un bucle infinito, si no colocamos el array vacio
    // ! la funcion que este dentro de useEffect se llama n veces de forma infinita
  }, [])

  return (
    <Container>
      <h1>Pokedex</h1>
      {/* && Estamos simulando un if */}
      {/* {pokemons.length > 0 ? (
        pokemons.map((pokemon) => (
          // Acqui va el codigp visual
          <p>
            {pokemon.name}
          </p>
        ))
      ): (
        <h4>No hay Datos</h4>
      )} */}

      <Grid container apacing={3}>
        {pokemons.length > 0 &&
          pokemons.map((pokemon, index) => (
            // Acqui va el codigp visual
            <Grid item md={4} lg={4} sm={12} xs={12} mt={3}>
              <Card className="card-pokemon">
                <CardMedia component="img" className="img-pokemon" image={`${imgUrl}${index + 1}.svg`}></CardMedia>
                <CardContent className="center">
                  <h3 className="name-pokemon">{pokemon.name}</h3>
                  <PokemonDetail nombre={pokemon.name} url={pokemon.url} />
                </CardContent>
              </Card>
            </Grid>
          ))}
      </Grid>

    </Container>
  );
};

export default Home;