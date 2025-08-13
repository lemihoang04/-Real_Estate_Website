import Header from "./Header";

import { Outlet } from "react-router-dom";


const UserLayout = () => {
    return (
        <>
            <Header />
            {/* <main style={{ minHeight: "80vh" }}> */}
            <main>
                <Outlet />
            </main>
        </>
    );
};

export default UserLayout;
