import Router from "./router";
import { UserProvider } from "./Context/UserContext";
// Archivo que contiene mi router, para enviar cambios en la rama develop
const App = () => {
    return (
        <UserProvider>
            <div>
                <Router></Router>
            </div>
        </UserProvider>
    );
};

export default App