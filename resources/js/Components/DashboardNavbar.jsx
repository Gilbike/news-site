import { Link, usePage } from "@inertiajs/react";
import React, { useState } from "react";
import DashboardNavbarButton from "./DashboardNavbarButton";

export default function DashboardNavbar() {
    const user = usePage().props.auth.user;

    const [profileOpen, setProfileOpen] = useState(false);

    const toggleProfileOpen = () => setProfileOpen(!profileOpen);

    return (
        <div className="px-4 py-3 bg-white shadow flex flex-row items-center justify-between z-10">
            <div className="flex flex-row items-center gap-10">
                <Link href={route("dashboard")}>News Site</Link>
                <div className="flex flex-row items-center gap-4">
                    <DashboardNavbarButton to="dashboard" label="Dashboard" />
                    <DashboardNavbarButton
                        to="journalists.index"
                        label="Journalists"
                    />
                </div>
            </div>

            <div className="relative">
                <button
                    className="flex flex-col items-end hover:bg-neutral-100 px-3 py-2 rounded-lg"
                    onClick={toggleProfileOpen}
                >
                    <p className="leading-tight">
                        {user.firstname} {user.lastname}
                    </p>
                    <p className="font-light text-sm text-neutral-600 leading-none">
                        {user.email}
                    </p>
                </button>

                {profileOpen && (
                    <div
                        className="fixed inset-0 z-40"
                        onClick={() => setProfileOpen(false)}
                    ></div>
                )}

                {profileOpen ? (
                    <div className="absolute w-48 right-0 bg-neutral-50 shadow rounded-lg overflow-hidden z-50">
                        <Link
                            href="/logout"
                            method="post"
                            className="flex px-3 py-2 hover:bg-neutral-100"
                        >
                            Logout
                        </Link>
                    </div>
                ) : null}
            </div>
        </div>
    );
}
