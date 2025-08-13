import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import PropertiesList from "../pages/PropertiesList/PropertiesList";
import Header from "../components/Header";

const ClientRoutes = () => {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/properties" element={<PropertiesList />} />
            </Routes>
        </Router>
    );
};

export default ClientRoutes;
