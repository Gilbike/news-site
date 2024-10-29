import SectionRow from "@/Components/Sections/SectionRow";
import DashboardLayout from "@/Layouts/DashboardLayout";
import { Link, usePage } from "@inertiajs/react";
import React from "react";

export default function Index({ sections }) {
    return (
        <DashboardLayout>
            <div className="bg-white rounded-lg shadow p-6">
                <div className="flex flex-row items-center justify-between mb-6">
                    <h2 className="font-bold text-xl">Sections</h2>
                    {usePage().props.auth.user.editor && (
                        <Link
                            href={"/"}
                            className="rounded px-3 py-1 bg-indigo-500 hover:bg-indigo-600 text-white"
                        >
                            Add new
                        </Link>
                    )}
                </div>

                <table className="w-full rounded overflow-hidden">
                    <thead className="bg-neutral-100">
                        <tr>
                            <th>Name</th>
                            {usePage().props.auth.user.editor == true && (
                                <th>Action</th>
                            )}
                        </tr>
                    </thead>
                    <tbody>
                        {sections.map((section) => (
                            <SectionRow key={section.id} {...section} />
                        ))}
                    </tbody>
                </table>
            </div>
        </DashboardLayout>
    );
}
