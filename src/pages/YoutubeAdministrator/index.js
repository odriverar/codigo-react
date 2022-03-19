import { useState, useEffect } from "react";
import {
    Button,
    Container,
    Grid,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper
} from "@mui/material";
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';
import { getMovies } from "../../service/movies";

const YoutubeAdministrator = () => {
    const [movies, setMovies] = useState([]);
    const fetchMovies = async () => {
        const response = await getMovies();
        setMovies(response);
    };

    useEffect(() => {
        fetchMovies();
    }, []);

    return (
        <Container>
            <h4>Lista de Peliculas</h4>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Nombre</TableCell>
                            <TableCell>Director</TableCell>
                            <TableCell>Genero</TableCell>
                            <TableCell>Link de video</TableCell>
                            <TableCell>Botones</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {movies.length > 0 &&
                            movies.map((movie) => (
                                <TableRow>
                                    <TableCell>{movie.name}</TableCell>
                                    <TableCell>{movie.director}</TableCell>
                                    <TableCell>{movie.gender}</TableCell>
                                    <TableCell>
                                        <a href="{movie.video_link}">Ver video</a>
                                    </TableCell>
                                    <TableCell>
                                        <Button color="info"><EditRoundedIcon /></Button>
                                        <Button color="error"><DeleteForeverRoundedIcon /></Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    );
};

export default YoutubeAdministrator;
