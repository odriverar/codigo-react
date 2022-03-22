/**
 *  * Para poder crear uestras rutas debemos importar lo siguiente.
 *  * BrowsRouter: Va a envolver todas las rutas que creemos.
 *  * Routes: Es el child de BrowsRouter el cual nos va a permitir crear las rutas por componente.
 *  * Route: Es el encargado de recibir la ruta y el elemento (Path y element) y renderizar el element en el path creado.
 */
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home"
import Flags from "../pages/Flags";
import FlagsDetail from "../pages/FlagsDetail";
import Youtube from "../pages/Youtube";
import YoutubeAdministrator from "../pages/YoutubeAdministrator";
import MovieUpdate from "../pages/MovieUpdate";


// ? Nuestro Router va a ser un componente el cual se encarga de retornar las rutas con su respectiva vista.

const Router = () => {
    // ! como esto es un componente, tenemos que usar retur para poder crear las rutas
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/flags" element={<Flags />} />
                <Route path="/Flags/Detalle/:pais" element={<FlagsDetail />} />
                <Route path="/Youtube" element={<Youtube />} />
                <Route path="/Youtube/Administrator" element={<YoutubeAdministrator />} />
                <Route
                    path="/Youtube/Administrator/editar/:id"
                    element={<MovieUpdate />}
                />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;