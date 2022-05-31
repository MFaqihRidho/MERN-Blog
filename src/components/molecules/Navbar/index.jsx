import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate();
    return (
        <nav className="w-full h-20 shadow-md items-center justify-center fixed flex mx-auto bg-primary">
            <div className="w-[90%] h-full items-center flex justify-between">
                <h1 className="text-3xl font-bold text-gray-200">MERN-Blog</h1>
                <div className="text-2xl text-gray-200 flex flex-row gap-10">
                    <button
                        onClick={() => navigate("/")}
                        className="font-semibold"
                    >
                        Home
                    </button>
                    <button
                        onClick={() => navigate("/register")}
                        className="font-semibold"
                    >
                        Register
                    </button>
                    <button
                        onClick={() => navigate("/login")}
                        className="font-semibold"
                    >
                        Login
                    </button>
                    {/* <button className="font-semibold">Logout</button>s */}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
