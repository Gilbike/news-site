import React from "react";

export default function Button({
    children,
    className = "",
    disabled,
    ...props
}) {
    return (
        <button
            className={`px-4 py-2 rounded-md ${
                disabled ? "bg-indigo-200" : "bg-indigo-500 hover:bg-indigo-600"
            } transition-colors text-white ${className}`}
            disabled={disabled}
            {...props}
        >
            {children}
        </button>
    );
}
