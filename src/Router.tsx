import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";
import SelectHero from "./pages/SelectHero/SelectHero";
import Home from "./pages/Home/Home";
import Profile from "./pages/Profile/Profile";
import NotFound from "./pages/NotFound/NotFound";


export function Router({}){


    return(
        <Routes>
            {/* general routes */}
            <Route 
                path="/" 
                element={<Login />}
            />

            <Route
                path="/home"
                element={<Home />}
            />

            <Route 
                path="/forgot-password"
                element={<ForgotPassword />}
            />
            <Route 
                path="/select-hero"
                element={<SelectHero/>}
            />
            <Route
                path="*"
                element={<NotFound />}
            />

            <Route
                path="/profile"
                element={<Profile />}
            />
        </Routes>
    );
}