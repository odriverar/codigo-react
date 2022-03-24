import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container, Grid } from "@mui/material";
import { getDataFromPokemon } from "../../service";

const FlagsDetail = () => {
    // const [country, setCountry] = useState({
    //     bandera:"",
    //     nombre: "",
    //     native: "",
    //     poblacion: "",
    //     region: "",
    //     subregion: "",
    //     capital: "",
    //     toplevel: "",
    // });
    const [countries, setCountries] = useState([]);

    const [country, setCountry] = useState({
        flags: "",
        names: "",
        population: "",
        region: "",
        subregion: "",
        capital: "",
        toplevel: "",
        monedas: "",
    })

    const { pais } = useParams();

    const fecthCountry = async () => {
        const response = await getDataFromPokemon(`https://restcountries.com/v3.1/name/${pais}`);
        console.log(response[0]);
        // setCountry({
        //     bandera: response[0].flags.svg,
        //     nombre: response[0].name.common,
        //     native: response[0].name.official,
        //     poblacion: response[0].population,
        //     region: response[0].region,
        //     subregion: response[0].subregion,
        //     capital: response[0].capital,
        //     toplevel: response[0].tld,
        // });
        setCountries({response});

        setCountry({
            flags: response[0].flags,
            names: response[0].name,
            population: response[0].population,
            region: response[0].region,
            subregion: response[0].subregion,
            capital: response[0].capital,
            toplevel: response[0].tld,
            monedas: response[0].currencies[0],
        })
        
        console.log(countries[0]);
    }

    useEffect(() => {
        fecthCountry();
    }, [])

    return (
        // <h1>{country.borders[1]}</h1>
            <Grid container sx={{border: "solid"}}>
                <Grid item md={6} sx={{border: "solid #f01"}}>
                    <img
                        width={600}
                        src={
                             country.flags.svg
                        }
                        alt=""
                    />
                </Grid>
                <Grid item md={6} sx={{border: "solid #f99"}}>
                    <h1>{country.names.common}</h1>
                    <Grid container>
                        <Grid item md={6} ml={3} sx={{border: "solid #f01"}}>
                            <p>Native Name: {country.names.official}</p>
                            <p>Population: {country.population}</p>
                            <p>Region: {country.region}</p>
                            <p>Sub Region: {country.subregion}</p>
                            <p>Capital: {country.capital}</p>
                        </Grid>
                        <Grid item md={6} ml={3} sx={{border: "solid #999"}}>
                            <p>Top Level Domain: {country.toplevel}</p>


                            {/* {country.currencies.map((currency) => (
                                // {currency.name}
                                <p>Hola </p>
                            ))} */}
                        </Grid>
                    </Grid>
                    
                    {/* <h1>{country.nombre}</h1>
                <p>{country.native}</p>
                <p>{country.poblacion}</p>
                <p>{country.region}</p>
                <p>{country.subregion}</p>
                <p>{country.capital}</p>
                <p>{country.toplevel}</p> */}
                </Grid>
            </Grid>

    )
}

export default FlagsDetail;