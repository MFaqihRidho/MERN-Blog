import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Login, Register, CreateBlog, DetailBlog } from "../../pages";
import { Navbar } from "../../components";

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="create-blog" element={<CreateBlog />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
        </Routes>
    );
};

export default Router;
