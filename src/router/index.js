/**
 *  * Para poder crear uestras rutas debemos importar lo siguiente.
 *  * BrowsRouter: Va a envolver todas las rutas que creemos.
 *  * Routes: Es el child de BrowsRouter el cual nos va a permitir crear las rutas por componente.
 *  * Route: Es el encargado de recibir la ruta y el elemento (Path y element) y renderizar el element en el path creado.
 */
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home"
import Flags from "../pages/Flags";

// ? Nuestro Router va a ser un componente el cual se encarga de retornar las rutas con su respectiva vista.

const Router = () => {
    // ! como esto es un componente, tenemos que usar retur para poder crear las rutas
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Flags" element={<Flags /> } />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;