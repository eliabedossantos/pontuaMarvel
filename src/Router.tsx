import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";
// import { Home } from "./pages/home";



export function Router({}){


    return(
        <Routes>
            {/* general routes */}
            <Route 
                path="/" 
                element={<Login />}
            />
            <Route 
                path="/forgot-password"
                element={<ForgotPassword />}
            />

        </Routes>
    );
}