import React from "react";
import { RegisterBg } from "../../assets";

const Register = () => {
    return (
        <div className="flex h-[100vh] max-w-[100vw] container">
            <div className="w-full bg-gray-100 h-full">
                <img className=" h-full w-[1000px]" src={RegisterBg} alt="" />
            </div>
            <div className=" w-[700px] flex flex-col items-center justify-center bg-primary h-full mx-auto">
                <h1 className="text-4xl text-gray-100 p-10 text-center font-bold">
                    Register
                </h1>
                <form className="w-2/3 h-2/3 rounded bg-gray-100"></form>
            </div>
        </div>
    );
};

export default Register;
