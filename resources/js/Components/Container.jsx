import React from "react";

export default function Container({ children }) {
    return (
        <div className="m-auto w-full sm:w-10/12 md:w-7/12 p-2 sm:p-0">
            {children}
        </div>
    );
}
