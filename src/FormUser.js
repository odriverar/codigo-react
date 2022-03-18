import { useState } from "react";
import { TextField, Button } from "@mui/material";

const FormUser = () => {
    const [valorDeInputs, setValorDeInputs] = useState({
        nombre: "",
        apellido: "",
        correo: "",
        password: "",
    });

    // * Ahora debemos construir una funcion que se encargue de almacenar los valores de los inputs en el objeto

    const handleInputValues = (e) => {
        //debemos extrare 2 cosas de event:
        // !1.- el name de cada input
        // !2.- el value de cada input
        const { name, value } = e.target;

        setValorDeInputs({
            ...valorDeInputs,
            [name]: value,
        });
    };

    return (
        <div>
            <form action="">
                {/* En react la forma en la cual damos una clase es usando el className */}
                <h4 className="title">Formulario de registro</h4>
                <h5>Nombre {valorDeInputs.nombre}</h5>
                <h5>Apellido {valorDeInputs.apellido}</h5>
                <h5>Correo {valorDeInputs.correo}</h5>
                <h5>Password {valorDeInputs.password}</h5>
                <p>
                    <TextField
                        error={false}
                        helperText="Incorrect entry."
                        type="text"
                        onChange={handleInputValues}
                        name="nombre"        
                        label="Ingrese su nombre"
                    />
                </p>
                <p>
                    <TextField
                        type="text"
                        onChange={handleInputValues}
                        name="apellido"
                        variant="filled"
                        label="Ingrese su apellido"
                    />
                </p>
                <p>
                    <TextField
                        type="email"
                        onChange={handleInputValues}
                        name="correo"
                        variant="standard"
                        label="Ingrese su email"
                    />
                </p>
                <p>
                    <TextField
                        type="password"
                        onChange={handleInputValues}
                        name="password"
                        label="Ingrese su password"
                    />
                </p>
                <p>
                    <Button variant="contained" color="primary" type="submit">
                        Registar
                    </Button>
                </p>
            </form>
        </div>
    );
};

export default FormUser;
