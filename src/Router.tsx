import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";
import SelectHero from "./pages/SelectHero/SelectHero";
import Home from "./pages/Home/Home";


export function Router({}){


    return(
        <Routes>
            {/* general routes */}
            <Route
                path="/home"
                element={<Home />}
            />
            <Route 
                path="/" 
                element={<Login />}
            />

            <Route 
                path="/forgot-password"
                element={<ForgotPassword />}
            />
            <Route 
                path="/select-hero"
                element={<SelectHero/>}
            />

        </Routes>
    );
}