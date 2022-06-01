import React from "react";
import { useNavigate } from "react-router-dom";

const BlogItem = ({ title, author, desc, image, id }) => {
    const navigate = useNavigate();
    const detailBlog = () => {
        navigate(`/detail-blog/${id}`);
    };
    return (
        <div
            onClick={detailBlog}
            className="w-fit cursor-pointer hover:bg-gray-300 transition-colors duration-200 bg-gray-200 flex flex-col items-center h-fit rounded-lg overflow-hidden"
        >
            <img
                className="min-w-[700px] max-h-[350px] object-cover"
                src={image}
                alt=""
            />
            <div className="flex flex-col py-3 max-w-fit px-10 items-center">
                <h5 className="text-2xl font-bold text-gray-600">{title}</h5>
                <p className="text-lg text-gray-400 font-semibold">{author}</p>
                <p className="text-xl text-gray-600 font-medium mt-5">{desc}</p>
            </div>
        </div>
    );
};

export default BlogItem;
