import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home, Login, Register, CreateBlog, DetailBlog } from "../../pages";
import { Navbar } from "../../components";

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="create-blog" element={<CreateBlog />} />
            <Route path="detail-blog/:id" element={<DetailBlog />} />
        </Routes>
    );
};

export default Router;
