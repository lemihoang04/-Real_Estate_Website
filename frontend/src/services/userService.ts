import axios from "../setup/axios";


const LoginService = (data: Record<string, any>): Promise<any> => {
    return axios
        .post("/login", data, {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
        })
        .then((response) => {
            console.log("Login response1:", response);
            return response;
        })
        .catch((error) => {
            console.error("Login error:", error);
            throw error;
        });
};


export {
    LoginService,
};
