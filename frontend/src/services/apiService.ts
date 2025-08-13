import api from "../setup/api";

const getProperties = async () => {
    try {
        const response = await api.get("/properties");
        return response;
    } catch (error) {
        console.error("Error fetching properties:", error);
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

export { getProperties, createProperty };
