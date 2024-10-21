import React from "react";
import Input from "./Input";

export default function FormInput({
    fieldName,
    label,
    error,
    className,
    ...props
}) {
    return (
        <div className={className}>
            <label
                className="text-sm leading-tight text-neutral-800"
                htmlFor={fieldName}
            >
                {label}
            </label>
            <Input
                id={fieldName}
                className={error ? "border-red-500" : ""}
                {...props}
            />
            {error && <p className="text-red-500 text-sm">{error}</p>}
        </div>
    );
}
