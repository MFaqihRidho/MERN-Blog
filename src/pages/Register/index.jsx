import React from "react";
import { useNavigate } from "react-router-dom";
import { RegisterBg } from "../../assets";
import { Input, Button, Link } from "../../components";

const Register = () => {
    const navigate = useNavigate();

    return (
        <div className="flex font-Poppins h-[100vh] max-w-[100vw] container">
            <div className="w-full hidden lg:flex items-center bg-gray-100 h-full">
                <img
                    className=" h-[600px] w-full"
                    src={RegisterBg}
                    alt="register-bg"
                />
            </div>
            <div className="w-full lg:w-[700px] flex flex-col items-center justify-start bg-primary h-full mx-auto">
                <h1 className="text-4xl text-gray-100 p-10 text-center font-bold">
                    Register
                </h1>
                <form className="lg:w-2/3 h-fit rounded px-5 flex flex-col gap-5 py-7 bg-gray-100">
                    <Input
                        label="Full Name"
                        placeholder="Your Full Name"
                        type="text"
                    ></Input>
                    <Input
                        label="Email"
                        placeholder="Your Email"
                        type="email"
                    ></Input>
                    <Input
                        label="Password"
                        placeholder="Your Password"
                        type="password"
                    ></Input>
                    <Button title="Register" type="submit"></Button>
                    <div className="self-center">
                        {" "}
                        <Link
                            onClick={() => navigate("/login")}
                            title="Back To Login"
                        ></Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;
