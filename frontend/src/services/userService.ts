import axios from "../setup/axios";


const LoginService = (data: Record<string, any>) => {
    return axios
        .post("/login", data) // chỉ cần /login
        .then((response) => {
            return response.data; // trả về JSON
        })
        .catch((error) => {
            console.error("Login error:", error);
            throw error;
        });
};


export {
    LoginService,
};
