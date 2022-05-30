import React from "react";

const Input = ({ label, ...rest }) => {
    return (
        <div className="w-full flex flex-col gap-1">
            <p className="text-xl font-semibold text-gray-700">{label}</p>
            <input
                {...rest}
                className="text-xl text-gray-700 bg-gray-200 focus:ring-2 px-3 py-2 transition-all duration-100 rounded focus:ring-primary focus:outline-none "
            />
        </div>
    );
};

export default Input;
