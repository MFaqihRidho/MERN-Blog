import React from "react";
import { LoginBg } from "../../../assets";

const Upload = () => {
    return (
        <div className="flex flex-col gap-3 items-center">
            <img className="max-w-[400px]" src={LoginBg} alt="preview" />
            <label className="w-full flex flex-col items-center px-4 py-6 bg-gray-200 rounded tracking-wide cursor-pointer hover:bg-primary transition-colors duration-200 hover:text-white">
                <input type="file" className="hidden" />
                <svg
                    className="w-8 h-8"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                >
                    <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                </svg>
                <p className="mt-2 text-lg leading-normal">Select a File</p>
            </label>
        </div>
    );
};

export default Upload;
