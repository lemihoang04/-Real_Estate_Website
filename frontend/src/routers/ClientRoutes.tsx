import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WebLayout from "../layouts/WebLayout";
import Home from "../pages/Home/Home";
import PropertiesList from "../pages/Properties/PropertiesList";
import Login from "../pages/Login/Login";
import ProtectedRoute from "./ProtectedRoute";
import AddProperty from "../pages/Properties/AddProperty";
import PropertyDetail from "../pages/Properties/PropertyDetail";
import UpdateProperty from "../pages/Properties/UpdateProperty";

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
                    <Route
                        path="/properties/create"
                        element={
                            <ProtectedRoute>
                                <AddProperty />
                            </ProtectedRoute>
                        }
                    />

                    <Route
                        path="/properties/:id"
                        element={
                            <ProtectedRoute>
                                <PropertyDetail />
                            </ProtectedRoute>
                        }
                    />

                    <Route
                        path="/properties/:id/edit"
                        element={
                            <ProtectedRoute>
                                <UpdateProperty />
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
