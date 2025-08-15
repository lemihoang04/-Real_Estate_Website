import React from 'react';
import { Link } from 'react-router-dom';

interface PropertyImage {
    id: number;
    image_path: string;
    is_primary: number;
}

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
    images?: PropertyImage[];
}

interface PropertyCardProps {
    property: Property;
    onDelete: (property: Property) => void;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property, onDelete }) => {
    const primaryImage = property.images?.find(img => img.is_primary === 1);
    const imageUrl = primaryImage
        ? `http://localhost:8000${primaryImage.image_path}`
        : '/images/placeholder-property.jpg';

    const getStatusBadgeClass = (status: string) => {
        switch (status) {
            case 'available': return 'bg-success';
            case 'sold': return 'bg-danger';
            case 'pending': return 'bg-warning';
            default: return 'bg-secondary';
        }
    };

    return (
        <div className="col-lg-4 col-md-6 mb-4">
            <div className="card h-100 shadow-sm">
                <div className="position-relative">
                    <img
                        src={imageUrl}
                        className="card-img-top"
                        alt={property.title}
                        style={{ height: '200px', objectFit: 'cover' }}
                        onError={(e) => {
                            e.currentTarget.src = '/images/placeholder-property.jpg';
                        }}
                    />
                    <span className={`badge ${getStatusBadgeClass(property.status)} position-absolute top-0 end-0 m-2`}>
                        {property.status}
                    </span>
                </div>

                <div className="card-body d-flex flex-column">
                    <h5 className="card-title text-truncate" title={property.title}>
                        {property.title}
                    </h5>

                    <p className="card-text text-primary fw-bold fs-5 mb-2">
                        ${property.price.toLocaleString()}
                    </p>

                    <div className="row text-muted small mb-3">
                        <div className="col-6">
                            <i className="bi bi-house me-1"></i>
                            {property.property_type}
                        </div>
                        <div className="col-6">
                            <i className="bi bi-geo-alt me-1"></i>
                            {property.city}
                        </div>
                    </div>

                    <div className="row text-muted small mb-3">
                        <div className="col-4">
                            <i className="bi bi-door-open me-1"></i>
                            {property.bedrooms} bed
                        </div>
                        <div className="col-4">
                            <i className="bi bi-droplet me-1"></i>
                            {property.bathrooms} bath
                        </div>
                        <div className="col-4">
                            <i className="bi bi-arrows-fullscreen me-1"></i>
                            {property.area}m²
                        </div>
                    </div>

                    <div className="mt-auto">
                        <div className="btn-group w-100" role="group">
                            <Link
                                to={`/properties/${property.id}`}
                                className="btn btn-outline-info btn-sm flex-fill"
                                title="View Details"
                            >
                                <i className="bi bi-eye me-1"></i>
                                View
                            </Link>
                            <Link
                                to={`/properties/${property.id}/edit`}
                                className="btn btn-outline-warning btn-sm flex-fill"
                                title="Edit Property"
                            >
                                <i className="bi bi-pencil me-1"></i>
                                Edit
                            </Link>
                            <button
                                className="btn btn-outline-danger btn-sm flex-fill"
                                onClick={() => onDelete(property)}
                                title="Delete Property"
                            >
                                <i className="bi bi-trash me-1"></i>
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PropertyCard;
