import Container from "@/Components/Container";
import Navbar from "@/Components/Navbar";
import { Head } from "@inertiajs/react";

export default function Layout({ page, children }) {
    return (
        <div className="bg-neutral-100 min-h-screen">
            <Head title={page} />
            <Navbar />
            <div className="mb-6"></div>
            <Container>{children}</Container>
        </div>
    );
}
