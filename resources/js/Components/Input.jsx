import React from "react";

export default function Input({ className = "", ...props }) {
    return (
        <input
            className={`outline-none py-2 px-3 rounded-md border border-neutral-600 w-full placeholder:text-neutral-600 focus:border-indigo-500 ${className}`}
            {...props}
        />
    );
}
