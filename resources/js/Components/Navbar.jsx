import { Link, usePage } from "@inertiajs/react";
import { useState } from "react";
import { IoMdClose, IoMdMenu } from "react-icons/io";

export default function Navbar() {
    const [sideBarOpen, setSideBarOpen] = useState(false);
    const sections = usePage().props.sections;

    return (
        <nav className="px-4 py-3 bg-white shadow flex flex-row items-center justify-between z-10">
            <div>
                <button onClick={() => setSideBarOpen(true)}>
                    <IoMdMenu size={32} />
                </button>

                {sideBarOpen && (
                    <div
                        className="fixed inset-0 z-40 bg-neutral-800/10"
                        onClick={() => setSideBarOpen(false)}
                    ></div>
                )}

                {sideBarOpen ? (
                    <div className="absolute h-full w-full md:w-1/4 lg:w-2/12 left-0 top-0 bg-neutral-50  overflow-hidden z-50 p-2">
                        <button
                            className="md:hidden mb-4"
                            onClick={() => setSideBarOpen(false)}
                        >
                            <IoMdClose size={32} />
                        </button>
                        <h2 className="font-bold text-xl mb-1">Sections</h2>
                        {sections.map((section) => (
                            <Link href={`/${section.name}`}>
                                {section.name}
                            </Link>
                        ))}
                    </div>
                ) : null}
            </div>
            <Link href="/" className="text-3xl text-indigo-500 font-bold">
                News Site
            </Link>
            <span></span>
        </nav>
    );
}
