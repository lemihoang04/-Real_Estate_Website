import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WebLayout from "../layouts/WebLayout";
import Home from "../pages/Home/Home";
import PropertiesList from "../pages/PropertiesList/PropertiesList";
import Header from "../layouts/Header";
import Login from "../pages/Login/Login";
import ProtectedRoute from "./ProtectedRoute";


const ClientRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route element={<WebLayout />}>
                    <Route
                        path="/"
                        element={
                            <ProtectedRoute>
                                <Home />
                            </ProtectedRoute>
                        }
                    />
                    <Route
                        path="/properties"
                        element={
                            <ProtectedRoute>
                                <PropertiesList />
                            </ProtectedRoute>
                        }
                    />
                </Route>
                <Route path="/login" element={<Login />} />
            </Routes>
        </Router>
    );
};

export default ClientRoutes;
