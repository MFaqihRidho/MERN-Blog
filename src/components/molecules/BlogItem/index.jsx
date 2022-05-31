import React from "react";

const BlogItem = ({ title, author, desc, image }) => {
    return (
        <div className="w-fit bg-gray-200 flex flex-col items-center h-fit rounded-lg overflow-hidden">
            <img
                className="min-w-[700px] max-h-[350px] object-cover"
                src={image}
                alt=""
            />
            <div className="flex flex-col py-3 max-w-fit px-10 items-center">
                <h5 className="text-2xl font-bold text-gray-600">{title}</h5>
                <p className="text-lg text-gray-400 font-semibold">{author}</p>
                <p className="text-xl text-gray-600 font-semibold mt-5">
                    {desc}
                </p>
            </div>
        </div>
    );
};

export default BlogItem;
