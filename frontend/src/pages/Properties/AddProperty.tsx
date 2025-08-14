import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import { createProperty } from '../../services/apiService';
import { toast } from 'react-toastify';

interface PropertyFormData {
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
    contact_name: string;
    contact_phone: string;
    contact_email: string;
    created_by: string;
    updated_by: string;
}

const AddProperty: React.FC = () => {
    const navigate = useNavigate();
    const { user } = useSelector((state: RootState) => state.auth);

    const [formData, setFormData] = useState<PropertyFormData>({
        title: '',
        description: '',
        property_type: '',
        status: 'available',
        price: 0,
        area: 0,
        bedrooms: 0,
        bathrooms: 0,
        floors: 1,
        address: '',
        city: '',
        district: '',
        postal_code: '',
        latitude: 0,
        longitude: 0,
        year_built: new Date().getFullYear(),
        features: '',
        contact_name: '',
        contact_phone: '',
        contact_email: '',
        created_by: '',
        updated_by: ''
    });

    const [images, setImages] = useState<File[]>([]);
    const [imagePreviews, setImagePreviews] = useState<string[]>([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (user?.id) {
            setFormData(prev => ({
                ...prev,
                created_by: user.id.toString(),
                updated_by: user.id.toString()
            }));
        }
    }, [user]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = Array.from(e.target.files || []);
        setImages(prev => [...prev, ...files]);

        files.forEach(file => {
            const reader = new FileReader();
            reader.onload = (event) => {
                setImagePreviews(prev => [...prev, event.target?.result as string]);
            };
            reader.readAsDataURL(file);
        });
    };

    const removeImage = (index: number) => {
        setImages(prev => prev.filter((_, i) => i !== index));
        setImagePreviews(prev => prev.filter((_, i) => i !== index));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            const submitData = new FormData();

            // Ensure created_by and updated_by are set to current user's ID
            const formDataToSubmit = {
                ...formData,
                created_by: user?.id?.toString() || '',
                updated_by: user?.id?.toString() || ''
            };

            Object.entries(formDataToSubmit).forEach(([key, value]) => {
                submitData.append(key, value.toString());
            });

            images.forEach((image) => {
                submitData.append('images[]', image); // key must be images[], type is File
            });

            const response = await createProperty(submitData);
            console.log('Property created successfully:', response);
            toast.success('Property added successfully!');
            navigate('/properties');
        } catch (error) {
            console.error('Error creating property:', error);
            toast.error('Error adding property');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container-fluid py-4">
            <div className="row">
                <div className="col-12">
                    <div className="card shadow">
                        <div className="card-header bg-primary text-white">
                            <h4 className="mb-0">Add New Property</h4>
                        </div>
                        <div className="card-body">
                            <form onSubmit={handleSubmit}>
                                {/* Basic Information */}
                                <div className="row mb-4">
                                    <div className="col-12">
                                        <h5 className="border-bottom pb-2">Basic Information</h5>
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <label className="form-label">Title *</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="title"
                                            value={formData.title}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <label className="form-label">Property Type *</label>
                                        <select
                                            className="form-select"
                                            name="property_type"
                                            value={formData.property_type}
                                            onChange={handleInputChange}
                                            required
                                        >
                                            <option value="">Select Type</option>
                                            <option value="house">House</option>
                                            <option value="apartment">Apartment</option>
                                            <option value="villa">Villa</option>
                                            <option value="land">Land</option>
                                            <option value="commercial">Commercial</option>
                                        </select>
                                    </div>
                                    <div className="col-12 mb-3">
                                        <label className="form-label">Description</label>
                                        <textarea
                                            className="form-control"
                                            name="description"
                                            rows={4}
                                            value={formData.description}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                </div>

                                {/* Property Details */}
                                <div className="row mb-4">
                                    <div className="col-12">
                                        <h5 className="border-bottom pb-2">Property Details</h5>
                                    </div>
                                    <div className="col-md-4 mb-3">
                                        <label className="form-label">Status</label>
                                        <select
                                            className="form-select"
                                            name="status"
                                            value={formData.status}
                                            onChange={handleInputChange}
                                        >
                                            <option value="available">Available</option>
                                            <option value="sold">Sold</option>
                                            <option value="rented">Rented</option>
                                            <option value="pending">Pending</option>
                                        </select>
                                    </div>
                                    <div className="col-md-4 mb-3">
                                        <label className="form-label">Price *</label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            name="price"
                                            value={formData.price}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </div>
                                    <div className="col-md-4 mb-3">
                                        <label className="form-label">Area (m²) *</label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            name="area"
                                            value={formData.area}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </div>
                                    <div className="col-md-3 mb-3">
                                        <label className="form-label">Bedrooms</label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            name="bedrooms"
                                            value={formData.bedrooms}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                    <div className="col-md-3 mb-3">
                                        <label className="form-label">Bathrooms</label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            name="bathrooms"
                                            value={formData.bathrooms}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                    <div className="col-md-3 mb-3">
                                        <label className="form-label">Floors</label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            name="floors"
                                            value={formData.floors}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                    <div className="col-md-3 mb-3">
                                        <label className="form-label">Year Built</label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            name="year_built"
                                            value={formData.year_built}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                </div>

                                {/* Location */}
                                <div className="row mb-4">
                                    <div className="col-12">
                                        <h5 className="border-bottom pb-2">Location</h5>
                                    </div>
                                    <div className="col-md-12 mb-3">
                                        <label className="form-label">Address *</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="address"
                                            value={formData.address}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </div>
                                    <div className="col-md-4 mb-3">
                                        <label className="form-label">City *</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="city"
                                            value={formData.city}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </div>
                                    <div className="col-md-4 mb-3">
                                        <label className="form-label">District</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="district"
                                            value={formData.district}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                    <div className="col-md-4 mb-3">
                                        <label className="form-label">Postal Code</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="postal_code"
                                            value={formData.postal_code}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <label className="form-label">Latitude</label>
                                        <input
                                            type="number"
                                            step="any"
                                            className="form-control"
                                            name="latitude"
                                            value={formData.latitude}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <label className="form-label">Longitude</label>
                                        <input
                                            type="number"
                                            step="any"
                                            className="form-control"
                                            name="longitude"
                                            value={formData.longitude}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                </div>

                                {/* Features */}
                                <div className="row mb-4">
                                    <div className="col-12">
                                        <h5 className="border-bottom pb-2">Features</h5>
                                    </div>
                                    <div className="col-12 mb-3">
                                        <label className="form-label">Features</label>
                                        <textarea
                                            className="form-control"
                                            name="features"
                                            rows={3}
                                            value={formData.features}
                                            onChange={handleInputChange}
                                            placeholder="e.g., Swimming pool, Garden, Parking, etc."
                                        />
                                    </div>
                                </div>

                                {/* Images */}
                                <div className="row mb-4">
                                    <div className="col-12">
                                        <h5 className="border-bottom pb-2">Images</h5>
                                    </div>
                                    <div className="col-12 mb-3">
                                        <label className="form-label">Property Images</label>
                                        <input
                                            type="file"
                                            className="form-control"
                                            name="images[]"
                                            multiple
                                            accept="image/*"
                                            onChange={handleImageChange}
                                        />
                                    </div>
                                    {imagePreviews.length > 0 && (
                                        <div className="col-12 mb-3">
                                            <div className="row">
                                                {imagePreviews.map((preview, index) => (
                                                    <div key={index} className="col-md-3 col-sm-6 mb-3">
                                                        <div className="card">
                                                            <img
                                                                src={preview}
                                                                className="card-img-top"
                                                                alt={`Preview ${index + 1}`}
                                                                style={{ height: '150px', objectFit: 'cover' }}
                                                            />
                                                            <div className="card-body p-2">
                                                                <button
                                                                    type="button"
                                                                    className="btn btn-danger btn-sm w-100"
                                                                    onClick={() => removeImage(index)}
                                                                >
                                                                    Remove
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>

                                {/* Contact Information */}
                                <div className="row mb-4">
                                    <div className="col-12">
                                        <h5 className="border-bottom pb-2">Contact Information</h5>
                                    </div>
                                    <div className="col-md-4 mb-3">
                                        <label className="form-label">Contact Name *</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="contact_name"
                                            value={formData.contact_name}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </div>
                                    <div className="col-md-4 mb-3">
                                        <label className="form-label">Contact Phone *</label>
                                        <input
                                            type="tel"
                                            className="form-control"
                                            name="contact_phone"
                                            value={formData.contact_phone}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </div>
                                    <div className="col-md-4 mb-3">
                                        <label className="form-label">Contact Email *</label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            name="contact_email"
                                            value={formData.contact_email}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </div>
                                </div>

                                {/* Submit Buttons */}
                                <div className="row">
                                    <div className="col-12">
                                        <hr />
                                        <div className="d-flex gap-2">
                                            <button
                                                type="submit"
                                                className="btn btn-primary"
                                                disabled={loading}
                                            >
                                                {loading ? (
                                                    <>
                                                        <span className="spinner-border spinner-border-sm me-2" />
                                                        Adding...
                                                    </>
                                                ) : (
                                                    'Add Property'
                                                )}
                                            </button>
                                            <button
                                                type="button"
                                                className="btn btn-secondary"
                                                onClick={() => navigate('/properties')}
                                            >
                                                Cancel
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};



export default AddProperty;
