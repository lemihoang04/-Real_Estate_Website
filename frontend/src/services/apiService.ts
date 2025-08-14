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

export { getProperties, createProperty, getPropertyById };
