import { Link } from "@inertiajs/react";
import { IoMdList } from "react-icons/io";

export default function Navbar() {
    return (
        <nav className="px-4 py-3 bg-white shadow flex flex-row items-center justify-between z-10">
            <button>
                <IoMdList size={32} />
            </button>
            <Link href="/" className="text-3xl text-indigo-500 font-bold">
                News Site
            </Link>
            <span></span>
        </nav>
    );
}
