import api from "../setup/api";

const getProperties = async (params?: Record<string, any>): Promise<any> => {
    try {
        const response = await api.get("/properties", { params });
        return response;
    } catch (error) {
        console.error("Error fetching properties:", error);
        throw error;
    }
};

const getPropertyById = async (id: number): Promise<any> => {
    try {
        const response = await api.get(`/properties/${id}`);
        return response;
    } catch (error) {
        console.error("Error fetching property:", error);
        throw error;
    }
};

const createProperty = async (propertyData: any) => {
    try {
        console.log("propertyData:", propertyData);
        const response = await api.post("/properties", propertyData, {
            headers: {
                Accept: "application/json",
            },
        });
        return response;
    } catch (error) {
        console.error("Error creating property:", error);
        throw error;
    }
};

const updateProperty = async (id: number, propertyData: any) => {
    try {
        console.log("propertyData:", propertyData);
        const response = await api.put(`/properties/${id}`, propertyData, {
            headers: {
                Accept: "application/json",
                "Content-Type": "application/x-www-form-urlencoded",
            },
        });
        return response;
    } catch (error) {
        console.error("Error updating property:", error);
        throw error;
    }
};

const softDeleteProperty = async (id: number) => {
    try {
        const response = await api.delete(`/properties/${id}`);
        return response;
    } catch (error) {
        console.error("Error soft deleting property:", error);
        throw error;
    }
};

const restoreProperty = async (id: number) => {
    try {
        const response = await api.post(`/properties/${id}/restore`);
        return response;
    } catch (error) {
        console.error("Error restoring property:", error);
        throw error;
    }
};

const getDeleted = async (): Promise<any> => {
    try {
        const response = await api.get("/properties_deleted");
        return response;
    } catch (error) {
        console.error("Error fetching deleted properties:", error);
        throw error;
    }
};

const addPropertyImages = async (propertyId: number, images: FileList | File[]) => {
    try {
        const formData = new FormData();
        Array.from(images).forEach((file) => {
            formData.append('images[]', file);
        });

        const response = await api.post(`/properties/${propertyId}/images`, formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });
        return response;
    } catch (error) {
        console.error("Error adding property images:", error);
        throw error;
    }
};

const deletePropertyImage = async (propertyId: number, imageId: number) => {
    try {
        const response = await api.delete(`/properties/${propertyId}/images/${imageId}`);
        return response;
    } catch (error) {
        console.error("Error deleting property image:", error);
        throw error;
    }
};

export { getProperties, createProperty, getPropertyById, updateProperty, softDeleteProperty, restoreProperty, getDeleted, addPropertyImages, deletePropertyImage };
