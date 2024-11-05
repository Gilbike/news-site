import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

export default function Select({ placeholder, options, onSelect }) {
    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState(undefined);
    const buttonRounding = isOpen ? "rounded-t-md" : "rounded-md";

    const handleOptionClick = (option) => {
        onSelect?.(option.value);
        setIsOpen(false);
        setSelected(options.indexOf(option));
    };

    return (
        <div className="relative">
            <button
                onClick={() => setIsOpen(true)}
                className={`py-2 px-3 border border-neutral-600 w-full ${
                    selected == undefined ? "text-neutral-600" : "text-black"
                } flex flex-row justify-between items-center ${buttonRounding}`}
            >
                {selected == undefined ? placeholder : options[selected].label}
                <FaChevronDown />
            </button>

            {isOpen && (
                <div
                    className="fixed inset-0 z-40"
                    onClick={() => setIsOpen(false)}
                ></div>
            )}

            {isOpen ? (
                <div className="absolute w-full left-0 bg-white shadow-md rounded-b-lg overflow-hidden z-50 border border-t-0 border-neutral-600">
                    {options.map((option) => (
                        <div
                            onClick={() => handleOptionClick(option)}
                            key={option.value}
                            className="block p-2 hover:bg-neutral-100 w-full cursor-pointer"
                        >
                            {option.label}
                        </div>
                    ))}
                </div>
            ) : null}
        </div>
    );
}
