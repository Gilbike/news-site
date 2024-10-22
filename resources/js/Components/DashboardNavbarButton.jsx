import { Link } from "@inertiajs/react";
import React from "react";

export default function DashboardNavbarButton({ to, label }) {
    const active = route().current(to);

    return (
        <Link
            href={route(to)}
            className={`${
                active
                    ? "text-black border-b-2 border-indigo-500"
                    : "text-neutral-600"
            } `}
        >
            {label}
        </Link>
    );
}
