import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Denuncia from "../pages/Denuncia";
import Detector from "../pages/Detector";

function AppRoutes(){

    return(

        <BrowserRouter>

            <Routes>

                <Route
                    path="/"
                    element={<Home />}
                />

                <Route
                    path="/login"
                    element={<Login />}
                />

                <Route
                    path="/denuncia"
                    element={<Denuncia />}
                />

                <Route
                    path="/detector"
                    element={<Detector />}
                />

            </Routes>

        </BrowserRouter>
    );
}

export default AppRoutes;