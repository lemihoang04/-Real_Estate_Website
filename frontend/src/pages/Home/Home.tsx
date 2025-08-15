import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
    return (
        <div className="container-fluid">

            <div className="bg-success text-white py-4">
                <div className="container">
                    <h1 className="h2 mb-2">Real Estate Management System</h1>
                    <p className="mb-0">Manage your property listings and data</p>
                </div>
            </div>

            <div className="container py-5">
                <div className="row">
                    <div className="col-md-3 mb-4">
                        <div className="card text-center h-100">
                            <div className="card-body">
                                <i className="fas fa-plus-circle fa-3x text-primary mb-3"></i>
                                <h5 className="card-title">Create Property</h5>
                                <p className="card-text">Add new property listings to the database</p>
                                <Link to="/properties/create" className="btn btn-primary">Add New</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 mb-4">
                        <div className="card text-center h-100">
                            <div className="card-body">
                                <i className="fas fa-list fa-3x text-info mb-3"></i>
                                <h5 className="card-title">View Properties</h5>
                                <p className="card-text">Browse and search all property listings</p>
                                <Link to="/properties" className="btn btn-info">View All</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 mb-4">
                        <div className="card text-center h-100">
                            <div className="card-body">
                                <i className="fas fa-archive fa-3x text-secondary mb-3"></i>
                                <h5 className="card-title">Soft Deleted Properties</h5>
                                <p className="card-text">View and restore deleted property listings</p>
                                <Link to="/properties/deleted" className="btn btn-secondary">View Deleted</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 mb-4">
                        <div className="card text-center h-100">
                            <div className="card-body">
                                <i className="fas fa-trash fa-3x text-danger mb-3"></i>
                                <h5 className="card-title">Delete Properties</h5>
                                <p className="card-text">Remove properties from the database</p>
                                <Link to="/properties" className="btn btn-danger">Delete</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;


