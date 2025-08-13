import axios from "axios";
import { RootState } from "../app/store";
import { useSelector } from "react-redux";

const api = axios.create({
    baseURL: "http://localhost:8000/api",
});

const token = useSelector((state: RootState) => state.auth.token);
api.interceptors.request.use((config) => {
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export default api;
