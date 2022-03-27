import { useContext, useState, useEffect } from "react";
import { Container, Grid, Button, Card, CardContent } from "@mui/material";
import { UserContext } from "../../Context/UserContext";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

const BasketView = () => {
    const { basket, addOrRemoveProduct, deleteElementFromBasket } = useContext(UserContext);
    const [total, setTotal] = useState(0);
    const [subTotal, setSubTotal] = useState(0);

    const calculatePrice = () => {
        let sum = 0;
        let sumSinDcto = 0;
        basket.forEach((product) => {
            const totalPrice = +product.quantity * +product.price;
            const finalPrice = +product.quantity * +product.price_sale;
            sum += finalPrice;
            sumSinDcto += totalPrice;
        })
        setTotal(sum.toFixed(2));
        setSubTotal(sumSinDcto.toFixed(2));
    }

    useEffect(() => {
        calculatePrice();
    }, [basket])

    return (
        <Container maxWidth="xl">
            <Grid container spacing={3} mt={5}>
                <Grid item md={8}>
                    <h3>Bolsa de Compras</h3>
                    <Grid container spacing={3}>
                        {
                            basket.map(product => (
                                <Grid item md={12}>
                                    <Card>
                                        <CardContent>
                                            <Grid container spacing={3} alignItems="center">
                                                <Grid item md={3} textAlign="center">
                                                    <img style={{ objectFit: "contain" }} width={150} height={150} src={product.photo} alt="" />
                                                </Grid>
                                                <Grid item md={3}>
                                                    <h4>{product.name}</h4>
                                                </Grid>
                                                <Grid item md={3} textAlign="end">
                                                    <p>Precio: $ {product.price}</p>
                                                    <p>Precio con Dcto. $ {product.price_sale}</p>
                                                </Grid>
                                                <Grid item md={3} textAlign={"center"}>
                                                    <div>
                                                        <Button onClick={() => addOrRemoveProduct(product.id, false)}><RemoveIcon /></Button>
                                                        &nbsp;&nbsp;
                                                        {product.quantity}
                                                        &nbsp;&nbsp;
                                                        <Button onClick={() => addOrRemoveProduct(product.id, true)}><AddIcon /></Button>
                                                    </div>
                                                    <div>
                                                        <Button variant="contained" size="large" onClick={() => deleteElementFromBasket(product.id)}>Eliminar</Button>
                                                    </div>
                                                </Grid>
                                            </Grid>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            ))
                        }
                    </Grid>
                </Grid>
                <Grid item md={4}>
                    <Card>
                        <CardContent>
                            <h4>Resumen de tu orden</h4>
                            <Grid container spacing={3} alignItems="center">
                                <Grid item textAlign={"right"} md={12}>
                                    <p>Sub-total sin dcto productos <span>$ {subTotal}</span></p>
                                    <p>Descuento <span>$ {(subTotal - total).toFixed(2)}</span></p>
                                    <p>Sub-total <span>$ {total}</span></p>
                                </Grid>
                                <Grid item md={12} textAlign={"center"}>
                                    <Button variant="contained" size="large">Realizar Pago</Button>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    );
};

export default BasketView;