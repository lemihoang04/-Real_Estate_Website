import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getPropertyById } from '../../services/apiService';

interface Image {
    image_path: string;
    image_name: string;
    is_primary: boolean;
}

interface PropertyData {
    title: string;
    description: string;
    property_type: string;
    status: string;
    price: number;
    area: number;
    bedrooms: number;
    bathrooms: number;
    floors: number;
    address: string;
    city: string;
    district: string;
    postal_code: string;
    latitude: number;
    longitude: number;
    year_built: number;
    features: string;
    images: Image[];
    contact_name: string;
    contact_phone: string;
    contact_email: string;
}

const PropertyDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [selectedImage, setSelectedImage] = useState<string>('');
    const [property, setProperty] = useState<PropertyData | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchProperty = async () => {
            if (!id) {
                setError('Property ID is required');
                setLoading(false);
                return;
            }

            try {
                setLoading(true);
                const data = await getPropertyById(parseInt(id));
                console.log('Fetched property:', data.data);
                setProperty(data.data);
                setError(null);
            } catch (err) {
                setError('Failed to load property details');
                console.error('Error fetching property:', err);
            } finally {
                setLoading(false);
            }
        };

        fetchProperty();
    }, [id]);

    if (loading) {
        return (
            <div className="container mt-4">
                <div className="text-center">
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                    <p className="mt-2">Loading property details...</p>
                </div>
            </div>
        );
    }

    if (error || !property) {
        return (
            <div className="container mt-4">
                <div className="alert alert-danger" role="alert">
                    {error || 'Property not found'}
                </div>
            </div>
        );
    }

    const primaryImage = property.images.find(img => img.is_primary) || property.images[0];

    return (
        <div className="container mt-4">
            <div className="row">
                {/* Image Gallery */}
                <div className="col-lg-8">
                    <div className="card">
                        <div className="card-body p-0">
                            <img
                                src={selectedImage || `http://localhost:8000${primaryImage?.image_path}`}
                                alt={selectedImage ? "Selected" : primaryImage?.image_name}
                                className="img-fluid w-100"
                                style={{ height: '400px', objectFit: 'cover' }}
                            />
                            <div className="p-3">
                                <div className="row g-2">
                                    {property.images.map((image, index) => (
                                        <div key={index} className="col-3">
                                            <img
                                                src={`http://localhost:8000${image.image_path}`}
                                                alt={image.image_name}
                                                className={`img-fluid w-100 cursor-pointer border ${image.is_primary ? 'border-primary border-3' : 'border-light'
                                                    }`}
                                                style={{ height: '80px', objectFit: 'cover', cursor: 'pointer' }}
                                                onClick={() => setSelectedImage(`http://localhost:8000${image.image_path}`)}
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Property Information */}
                <div className="col-lg-4">
                    <div className="card">
                        <div className="card-header">
                            <h4 className="mb-0">{property.title}</h4>
                        </div>
                        <div className="card-body">
                            <div className="mb-3">
                                <span className={`badge ${property.status === 'For Sale' ? 'bg-success' : 'bg-primary'} mb-2`}>
                                    {property.status}
                                </span>
                                <h3 className="text-primary">${property.price.toLocaleString()}</h3>
                            </div>

                            <div className="row mb-3">
                                <div className="col-6">
                                    <strong>Type:</strong><br />
                                    {property.property_type}
                                </div>
                                <div className="col-6">
                                    <strong>Area:</strong><br />
                                    {property.area} m²
                                </div>
                            </div>

                            <div className="row mb-3">
                                <div className="col-4">
                                    <strong>Bedrooms:</strong><br />
                                    {property.bedrooms}
                                </div>
                                <div className="col-4">
                                    <strong>Bathrooms:</strong><br />
                                    {property.bathrooms}
                                </div>
                                <div className="col-4">
                                    <strong>Floors:</strong><br />
                                    {property.floors}
                                </div>
                            </div>

                            <div className="mb-3">
                                <strong>Year Built:</strong><br />
                                {property.year_built}
                            </div>

                            <div className="mb-3">
                                <strong>Features:</strong><br />
                                <p className="mb-0">{property.features}</p>
                            </div>
                        </div>
                    </div>

                    {/* Contact Information */}
                    <div className="card mt-3">
                        <div className="card-header">
                            <h5 className="mb-0">Contact Information</h5>
                        </div>
                        <div className="card-body">
                            <div className="mb-2">
                                <strong>Name:</strong><br />
                                {property.contact_name}
                            </div>
                            <div className="mb-2">
                                <strong>Phone:</strong><br />
                                <a href={`tel:${property.contact_phone}`} className="text-decoration-none">
                                    {property.contact_phone}
                                </a>
                            </div>
                            <div className="mb-3">
                                <strong>Email:</strong><br />
                                <a href={`mailto:${property.contact_email}`} className="text-decoration-none">
                                    {property.contact_email}
                                </a>
                            </div>
                            <button className="btn btn-primary w-100">Contact Agent</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Property Description */}
            <div className="row mt-4">
                <div className="col-12">
                    <div className="card">
                        <div className="card-header">
                            <h5 className="mb-0">Description</h5>
                        </div>
                        <div className="card-body">
                            <p>{property.description}</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Location Information */}
            <div className="row mt-4">
                <div className="col-12">
                    <div className="card">
                        <div className="card-header">
                            <h5 className="mb-0">Location</h5>
                        </div>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="mb-2">
                                        <strong>Address:</strong><br />
                                        {property.address}
                                    </div>
                                    <div className="mb-2">
                                        <strong>City:</strong><br />
                                        {property.city}
                                    </div>
                                    <div className="mb-2">
                                        <strong>District:</strong><br />
                                        {property.district}
                                    </div>
                                    <div className="mb-2">
                                        <strong>Postal Code:</strong><br />
                                        {property.postal_code}
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="mb-2">
                                        <strong>Coordinates:</strong><br />
                                        Lat: {property.latitude}, Lng: {property.longitude}
                                    </div>
                                    <button className="btn btn-outline-primary">
                                        View on Map
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default PropertyDetail;
