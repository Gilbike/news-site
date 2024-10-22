import JournalistRow from "@/Components/Journalists/JournalistRow";
import DashboardLayout from "@/Layouts/DashboardLayout";
import { Link, usePage } from "@inertiajs/react";
import React from "react";

export default function Index({ journalists }) {
    return (
        <DashboardLayout>
            <div className="bg-white rounded-lg shadow p-6">
                <div className="flex flex-row items-center justify-between mb-6">
                    <h2 className="font-bold text-xl">Journalists</h2>
                    {usePage().props.auth.user.editor && (
                        <Link
                            href={route("journalists.create")}
                            className="rounded px-3 py-1 bg-indigo-500 hover:bg-indigo-600 text-white"
                        >
                            Add new
                        </Link>
                    )}
                </div>

                <table className="w-full rounded overflow-hidden">
                    <thead className="bg-neutral-100">
                        <tr>
                            <th className="py-1">#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Editor?</th>
                            <th>Title</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {journalists.map((journalist) => (
                            <JournalistRow
                                key={journalist.id}
                                {...journalist}
                            />
                        ))}
                    </tbody>
                </table>
            </div>
        </DashboardLayout>
    );
}
