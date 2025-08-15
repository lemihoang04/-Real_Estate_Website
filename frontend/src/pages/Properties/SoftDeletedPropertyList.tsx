import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getDeleted, restoreProperty } from '../../services/apiService';
import { toast } from 'react-toastify';

interface Property {
    id: number;
    title: string;
    price: number;
    property_type: string;
    city: string;
    status: string;
    area: number;
    bedrooms: number;
    bathrooms: number;
    deleted_at: string;
    images: Array<{
        id: number;
        image_path: string;
        is_primary: boolean;
    }>;
}

const SoftDeletedPropertyList: React.FC = () => {
    const navigate = useNavigate();
    const [deletedProperties, setDeletedProperties] = useState<Property[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchDeletedProperties = async () => {
            try {
                setLoading(true);
                const response = await getDeleted();
                console.log('API response:', response);
                setDeletedProperties(response.data.data || []);
            } catch (error) {
                console.error("Error fetching deleted properties:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchDeletedProperties();
    }, []);

    const handleRestore = async (id: number) => {
        try {
            const response = await restoreProperty(id);
            if (response.status === 200) {
                setDeletedProperties(deletedProperties.filter((property: Property) => property.id !== id));
                toast.success("Property restored successfully");
            }
        } catch (error) {
            console.error("Error restoring property:", error);
        }
    };

    if (loading) {
        return (
            <div className="container-fluid py-4">
                <div className="text-center">
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="container-fluid py-4">
            <div className="row">
                <div className="col-12">
                    <div className="mb-3">
                        <button
                            type="button"
                            className="btn btn-primary btn-sm"
                            onClick={() => navigate('/properties')}
                        >
                            <i className="bi bi-arrow-left me-1"></i>
                            Back to Properties
                        </button>
                    </div>
                    <div className="card shadow">
                        <div className="card-header bg-secondary text-white">
                            <h4 className="mb-0">Soft Deleted Properties ({deletedProperties.length})</h4>
                        </div>
                        <div className="card-body">
                            {deletedProperties.length === 0 ? (
                                <div className="alert alert-info">
                                    <i className="fas fa-info-circle me-2"></i>
                                    No deleted properties found.
                                </div>
                            ) : (
                                <div className="table-responsive">
                                    <table className="table table-striped">
                                        <thead>
                                            <tr>
                                                <th>ID</th>
                                                <th>Title</th>
                                                <th>Price</th>
                                                <th>Type</th>
                                                <th>City</th>
                                                <th>Deleted At</th>
                                                <th>Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {deletedProperties.map((property) => (
                                                <tr key={property.id}>
                                                    <td>{property.id}</td>
                                                    <td>{property.title}</td>
                                                    <td>${property.price.toLocaleString()}</td>
                                                    <td>{property.property_type}</td>
                                                    <td>{property.city}</td>
                                                    <td>{new Date(property.deleted_at).toLocaleDateString()}</td>
                                                    <td>
                                                        <button
                                                            className="btn btn-success btn-sm"
                                                            onClick={() => handleRestore(property.id)}
                                                        >
                                                            <i className="fas fa-undo me-1"></i>
                                                            Restore
                                                        </button>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SoftDeletedPropertyList;

