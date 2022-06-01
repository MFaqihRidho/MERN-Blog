import React from "react";

const Button = ({ title, ...rest }) => {
    return (
        <div>
            <button
                className="px-5 py-2 w-full hover:bg-darkerPrimary transition-colors duration-150 rounded text-gray-100 font-semibold text-xl bg-primary"
                {...rest}
            >
                {title}
            </button>
        </div>
    );
};

export default Button;
