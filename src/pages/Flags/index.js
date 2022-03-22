import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardMedia, Container, Grid, TextField, FormControl, InputLabel, Select, MenuItem, CircularProgress } from "@mui/material"
import { getDataFromPokemon } from "../../service";

const Flags = () => {
    const [countries, setCountries] = useState([]);
    const [ region, setRegion ] = useState("")

    const fecthCountries = async () => {
        const response = await getDataFromPokemon("https://restcountries.com/v3.1/all");
        setCountries(response);
    }

    const handleRegion = async (e) => {
        setRegion(e.target.value);
        //* Vamos a vealuar si el valor es igual a all entonces ejecuta la fucnion fetchcountries
        if (e.target.value === "all") {
            fecthCountries();
            return
        }

        // primero debemos limpiar para poder llenarlo con la nueva informacion
        setCountries([]);
        const response = await getDataFromPokemon(
          `https://restcountries.com/v3.1/region/${e.target.value}`
        );
        setCountries(response);
    }

    const handleSearchCountry = (e) => {
        // es una buena practica decirle que inice a contar cuandfo tengamos mas de tres letras
        const countryName = e.target.value;

        if (countryName.length === 0) {
            fecthCountries()
            return
        }

        if (countryName.length > 3) {
            // Iniciamos la busqueda
            // Para poder hacer la busqueda debo transformar todo el texto a mayuscula o minuscula

            const filterCountries = countries.filter((country) => country.name.official.toUpperCase().includes(countryName.toUpperCase()));

            setCountries(filterCountries);
        }
    }

    useEffect(() => {
        fecthCountries();
    }, [])

    return (
        <Container>
            <Grid container spacing={3} mt={5}>
                <Grid item md={6}>
                    <TextField onChange={handleSearchCountry} label="Search for a country..." fullWidth/>
                </Grid>
                <Grid item md={6}>
                    <FormControl fullWidth>
                        <InputLabel>Filter by Region</InputLabel>
                        <Select label="Filter by Region" value={region} onChange={handleRegion}>
                            <MenuItem value="all">Todas las regiones</MenuItem>
                            <MenuItem value="Africa">Africa</MenuItem>
                            <MenuItem value="Americas">Americas</MenuItem>
                            <MenuItem value="Asia">Asia</MenuItem>
                            <MenuItem value="Europe">Europe</MenuItem>
                            <MenuItem value="Oceania">Oceania</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                {
                    countries.length > 0 ? countries.map(country => (
                        <Grid item md={3} xs={12}>
                            <Card>
                                {/* <Link to={`/Youtube/Administrator/editar/${movie.id}`}> */}
                                <Link to={`/Flags/Detalle/${country.name.common}`}>
                                    <CardMedia component="img" height={150} image={country.flags.svg}/>
                                </Link>
                                <CardContent>
                                    <h4>{country.name.official}</h4>
                                    <p>Population: {country.population}</p>
                                    <p>Region: {country.region}</p>
                                    <p>Capital: {country.capital}</p>
                                </CardContent>
                            </Card>
                        </Grid>
                    )): (
                        <div className="center loading">
                            <CircularProgress  />
                            <h4>Cargando...</h4>
                        </div>
                    )
                }
            </Grid>
        </Container>
    )
}

export default Flags;