import axios from "../setup/axios";


const LoginService = (data: Record<string, any>) => {
    return axios
        .post("/login", data)
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            console.error("Login error:", error);
            throw error;
        });
};


export {
    LoginService,
};
