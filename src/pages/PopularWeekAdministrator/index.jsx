import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { Button, Container, Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";

import ModeEditOutlineRoundedIcon from '@mui/icons-material/ModeEditOutlineRounded';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import { getProductClothes, deleteProductClothe } from "../../service/firestore";

import swal from "sweetalert";

const PopularWeekAdministrator = () => {
    const [ clothes, setClothes ] = useState([]);

    const fetchClothes = async () => {
        const data = await getProductClothes();
        console.log(data);
        setClothes(data);
    };

    const fetchDeleteProduct = async (id) => {
        const response = await swal({
            title: "¿Está seguro de eliminar?",
            text: "Recuerde que una vez eliminado no hay vuelta atras",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        });
        if (response) {
            await deleteProductClothe(id);
            await fetchClothes();
        }
    }

    useEffect(() => {
        fetchClothes();
    }, []);

    return (
        <Container>
            <Grid container spacing={3} mt={5}>
                <Grid item md={6}>
                    <h4>Lista de Productos</h4>
                </Grid>
                <Grid item md={6} sx={{textAlign: "right"}} >
                    <Link to={"/ecommerce/create"}>
                        <Button variant="outlined">Crear producto</Button>
                    </Link>
                </Grid>
            </Grid>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Nombre</TableCell>
                            <TableCell>Imagen</TableCell>
                            <TableCell>Precio</TableCell>
                            <TableCell>Precio de venta</TableCell>
                            <TableCell>Botones</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            clothes.length > 0 && clothes.map((clothe) => (
                                <TableRow>
                                    <TableCell>{clothe.name}</TableCell>
                                    <TableCell>
                                        <img style={{ objectFit: "contain" }} width={100} height={100} src={clothe.photo} alt="" />
                                    </TableCell>
                                    <TableCell>{clothe.price}</TableCell>
                                    <TableCell>{clothe.price_sale}</TableCell>
                                    <TableCell>
                                        <Button color="info">
                                            <ModeEditOutlineRoundedIcon />
                                        </Button>

                                        <Button color="error" onClick={() => fetchDeleteProduct(clothe.id)}>
                                            <DeleteRoundedIcon />
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))
                        }
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    );
};

export default PopularWeekAdministrator;