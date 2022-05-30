import React from "react";

const Link = ({ title, ...rest }) => {
    return (
        <p className="text-lg cursor-pointer text-primary underline" {...rest}>
            {title}
        </p>
    );
};

export default Link;
