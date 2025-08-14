import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getProperties } from '../../services/apiService';

interface Property {
    id: number;
    title: string;
    price: number;
    property_type: string;
    status: string;
    city: string;
    bedrooms: number;
    bathrooms: number;
    area: number;
    createdAt: string;
}

interface PaginationInfo {
    currentPage: number;
    totalPages: number;
    totalItems: number;
    itemsPerPage: number;
}

const PropertiesList: React.FC = () => {
    const [properties, setProperties] = useState<Property[]>([]);
    const [loading, setLoading] = useState(false);
    const [pagination, setPagination] = useState<PaginationInfo>({
        currentPage: 1,
        totalPages: 1,
        totalItems: 0,
        itemsPerPage: 10
    });

    // Search and filter states
    const [searchTerm, setSearchTerm] = useState('');
    const [cityFilter, setCityFilter] = useState(''); // replace typeFilter with cityFilter
    const [statusFilter, setStatusFilter] = useState('');
    const [priceRange, setPriceRange] = useState({ min: '', max: '' });
    const [sortBy, setSortBy] = useState('created_at');
    const [sortOrder, setSortOrder] = useState('desc');

    // Fetch properties with query params
    const fetchProperties = async () => {
        setLoading(true);
        try {
            const params: Record<string, any> = {
                page: pagination.currentPage,
                city: cityFilter,
                status: statusFilter,
                min_price: priceRange.min,
                max_price: priceRange.max,
                sort: sortBy,
                order: sortOrder,
                per_page: pagination.itemsPerPage // thêm per_page vào params
            };
            // Remove empty params
            Object.keys(params).forEach(key => {
                if (!params[key]) delete params[key];
            });

            const response = await getProperties(params);
            const data = response.data;

            setProperties(data.data);
            console.log('Fetched properties:', data); // Debugging log
            setPagination(prev => ({
                ...prev,
                totalPages: data.meta.last_page,
                totalItems: data.meta.total
            }));
        } catch (error) {
            console.error('Error fetching properties:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchProperties();
    }, [pagination.currentPage]); // update deps

    const handlePageChange = (page: number) => {
        setPagination(prev => ({ ...prev, currentPage: page }));
    };

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        setPagination(prev => ({ ...prev, currentPage: 1 }));
        fetchProperties();
    };

    const resetFilters = () => {
        setSearchTerm('');
        setCityFilter(''); // reset city
        setStatusFilter('');
        setPriceRange({ min: '', max: '' });
        setSortBy('created_at');
        setSortOrder('desc');
        setPagination(prev => ({ ...prev, currentPage: 1 }));
    };

    return (
        <div className="container-fluid">
            <div className="container-fluid py-4">
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <h2>Properties Management</h2>
                    <Link to="/properties/create" className="btn btn-primary">Add New Property</Link>
                </div>

                {/* Search and Filters */}
                <div className="card mb-4">
                    <div className="card-body">
                        <form onSubmit={handleSearch}>
                            <div className="row g-3">
                                <div className="col-md-3">
                                    <label className="form-label">Search</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Search properties..."
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                    />
                                </div>
                                <div className="col-md-2">
                                    <label className="form-label">City</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="City"
                                        value={cityFilter}
                                        onChange={(e) => setCityFilter(e.target.value)}
                                    />
                                </div>
                                <div className="col-md-2">
                                    <label className="form-label">Status</label>
                                    <select
                                        className="form-select"
                                        value={statusFilter}
                                        onChange={(e) => setStatusFilter(e.target.value)}
                                    >
                                        <option value="">All Status</option>
                                        <option value="available">Available</option>
                                        <option value="sold">Sold</option>
                                        <option value="pending">Pending</option>
                                    </select>
                                </div>
                                <div className="col-md-2">
                                    <label className="form-label">Min Price</label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        placeholder="Min price"
                                        value={priceRange.min}
                                        onChange={(e) => setPriceRange(prev => ({ ...prev, min: e.target.value }))}
                                    />
                                </div>
                                <div className="col-md-2">
                                    <label className="form-label">Max Price</label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        placeholder="Max price"
                                        value={priceRange.max}
                                        onChange={(e) => setPriceRange(prev => ({ ...prev, max: e.target.value }))}
                                    />
                                </div>
                                <div className="col-md-1">
                                    <label className="form-label">&nbsp;</label>
                                    <div>
                                        <button type="submit" className="btn btn-primary me-2">Search</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                        <div className="mt-3">
                            <button className="btn btn-outline-secondary" onClick={resetFilters}>
                                Reset Filters
                            </button>
                        </div>
                    </div>
                </div>

                {/* Sort Options */}
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <div>
                        <span className="me-3">Sort by:</span>
                        <select
                            className="form-select d-inline-block w-auto me-2"
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value)}
                        >
                            <option value="created_at">Date Created</option>
                            <option value="price">Price</option>
                            <option value="title">Title</option>
                            <option value="area">Area</option>
                        </select>
                        <select
                            className="form-select d-inline-block w-auto"
                            value={sortOrder}
                            onChange={(e) => setSortOrder(e.target.value)}
                        >
                            <option value="desc">Descending</option>
                            <option value="asc">Ascending</option>
                        </select>
                    </div>
                    <span className="text-muted">
                        Showing {((pagination.currentPage - 1) * pagination.itemsPerPage) + 1} to{' '}
                        {Math.min(pagination.currentPage * pagination.itemsPerPage, pagination.totalItems)} of{' '}
                        {pagination.totalItems} properties
                    </span>
                </div>

                {/* Properties Table */}
                <div className="card">
                    <div className="card-body">
                        {loading ? (
                            <div className="text-center py-4">
                                <div className="spinner-border" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </div>
                            </div>
                        ) : (
                            <div className="table-responsive">
                                <table className="table table-striped">
                                    <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>Title</th>
                                            <th>Type</th>
                                            <th>Price</th>
                                            <th>Status</th>
                                            <th>Location</th>
                                            <th>Bedrooms</th>
                                            <th>Bathrooms</th>
                                            <th>Area (m²)</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {properties.map((property) => (
                                            <tr key={property.id}>
                                                <td>{property.id}</td>
                                                <td>{property.title}</td>
                                                <td>
                                                    <span className="badge bg-secondary">{property.property_type}</span>
                                                </td>
                                                <td>${property.price.toLocaleString()}</td>
                                                <td>
                                                    <span className={`badge ${property.status === 'available' ? 'bg-success' :
                                                        property.status === 'sold' ? 'bg-danger' : 'bg-warning'
                                                        }`}>
                                                        {property.status}
                                                    </span>
                                                </td>
                                                <td>{property.city}</td>
                                                <td>{property.bedrooms}</td>
                                                <td>{property.bathrooms}</td>
                                                <td>{property.area}</td>
                                                <td>
                                                    <div className="btn-group btn-group-sm">
                                                        <Link to={`/properties/${property.id}`} className="btn btn-outline-info">
                                                            View
                                                        </Link>
                                                        <Link to={`/properties/${property.id}/edit`} className="btn btn-outline-warning">
                                                            Edit
                                                        </Link>
                                                        <button className="btn btn-outline-danger">
                                                            Delete
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        )}

                        {/* Pagination */}
                        {pagination.totalPages > 1 && (
                            <nav className="mt-4">
                                <ul className="pagination justify-content-center">
                                    <li className={`page-item ${pagination.currentPage === 1 ? 'disabled' : ''}`}>
                                        <button
                                            className="page-link"
                                            onClick={() => handlePageChange(pagination.currentPage - 1)}
                                            disabled={pagination.currentPage === 1}
                                        >
                                            Previous
                                        </button>
                                    </li>
                                    {Array.from({ length: pagination.totalPages }, (_, i) => i + 1).map((page) => (
                                        <li key={page} className={`page-item ${pagination.currentPage === page ? 'active' : ''}`}>
                                            <button
                                                className="page-link"
                                                onClick={() => handlePageChange(page)}
                                            >
                                                {page}
                                            </button>
                                        </li>
                                    ))}
                                    <li className={`page-item ${pagination.currentPage === pagination.totalPages ? 'disabled' : ''}`}>
                                        <button
                                            className="page-link"
                                            onClick={() => handlePageChange(pagination.currentPage + 1)}
                                            disabled={pagination.currentPage === pagination.totalPages}
                                        >
                                            Next
                                        </button>
                                    </li>
                                </ul>
                            </nav>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};


export default PropertiesList;

