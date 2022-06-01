import React from "react";

const Layout = ({ children }) => {
    return (
        <div className="max-w-[100vw] min-h-screen text-gray-700 bg-gray-100 flex justify-center">
            <div className="w-[90%] h-full py-24 flex justify-center">
                {children}
            </div>
        </div>
    );
};

export default Layout;
