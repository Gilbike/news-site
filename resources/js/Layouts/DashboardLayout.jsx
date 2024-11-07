import Container from "@/Components/Container";
import DashboardNavbar from "@/Components/DashboardNavbar";
import { Head } from "@inertiajs/react";
import React from "react";

export default function DashboardLayout({ page = "Dashboard", children }) {
    return (
        <div className="bg-neutral-100 min-h-screen pb-3">
            <Head title={page} />
            <DashboardNavbar />
            <div className="mb-6"></div>
            <Container>{children}</Container>
        </div>
    );
}
