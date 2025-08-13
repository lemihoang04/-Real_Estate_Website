import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <Link className="navbar-brand" to="/">Admin Dashboard</Link>
                <div className="navbar-nav ms-auto">
                    <Link className="nav-link" to="/properties">Manage Properties</Link>
                    <Link className="nav-link" to="/login">Logout</Link>
                </div>
            </div>
        </nav>
    );
};

export default Header;
