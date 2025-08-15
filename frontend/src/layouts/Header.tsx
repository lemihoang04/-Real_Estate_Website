import React from 'react';
import { Link } from 'react-router-dom';
import { LogoutService } from '../services/userService';
import { toast } from 'react-toastify';
import { useDispatch } from "react-redux";
import { logout } from "../features/auth/authSlice";
import { time } from 'console';

const Header: React.FC = () => {
    const dispatch = useDispatch();

    const handleLogout = async () => {
        try {
            const response = await LogoutService();
            if (response.status === 200) {
                toast.success("Logout successful");
                setTimeout(() => {
                    dispatch(logout());
                }, 1000);
            }
        } catch (error) {
            console.error("Logout failed:", error);
            toast.error("Logout failed");
        }

    };

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm border-bottom">
            <div className="container">
                <Link className="navbar-brand d-flex align-items-center fw-bold" to="/">
                    <i className="bi bi-house-door-fill text-primary me-2" style={{ fontSize: '1.8rem' }}></i>
                    <span className="text-dark">RealEstate<span className="text-primary">Pro</span></span>
                </Link>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                            <Link className="nav-link fw-medium" to="/">
                                <i className="bi bi-house me-1"></i>
                                Dashboard
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link fw-medium" to="/properties">
                                <i className="bi bi-building me-1"></i>
                                Properties
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link fw-medium" to="/properties/create">
                                <i className="bi bi-plus-circle me-1"></i>
                                Add Property
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link fw-medium" to="/properties/deleted">
                                <i className="bi bi-archive me-1"></i>
                                Archived
                            </Link>
                        </li>
                    </ul>

                    <div className="navbar-nav">
                        <Link className="nav-link d-flex align-items-center text-danger fw-medium" to="/login" onClick={handleLogout}>
                            <i className="bi bi-box-arrow-right me-1"></i>
                            Logout
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Header;
