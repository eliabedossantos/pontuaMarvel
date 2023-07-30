import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
// import { Home } from "./pages/home";



export function Router({}){


    return(
        <Routes>
            {/* general routes */}
            <Route 
                path="/" 
                element={<Login />}
            />

        </Routes>
    );
}