import SectionRow from "@/Components/Sections/SectionRow";
import TableSortColumn from "@/Components/TableSortColumn";
import DashboardLayout from "@/Layouts/DashboardLayout";
import { Link, router, usePage } from "@inertiajs/react";
import React from "react";

export default function Index({ sections }) {
    const params = new URLSearchParams(window.location.search);
    const orderDirection = params.get("dir") || "asc";

    const onHeadingClick = (column) => {
        let queryParams = {};

        if (orderDirection == "desc") {
            queryParams["dir"] = "asc";
        } else {
            queryParams["dir"] = "desc";
        }

        router.get(route(route().current()), queryParams);
    };

    return (
        <DashboardLayout>
            <div className="bg-white rounded-lg shadow p-6">
                <div className="flex flex-row items-center justify-between mb-6">
                    <h2 className="font-bold text-xl">Sections</h2>
                    {usePage().props.auth.user.editor && (
                        <Link
                            href={route("sections.create")}
                            className="rounded px-3 py-1 bg-indigo-500 hover:bg-indigo-600 text-white"
                        >
                            Add new
                        </Link>
                    )}
                </div>

                <div className="overflow-auto">
                    <table className="w-full rounded overflow-hidden">
                        <thead className="bg-neutral-100">
                            <tr>
                                <TableSortColumn
                                    label="Name"
                                    orderColumn="name"
                                    orderBy="name"
                                    orderDirection={orderDirection}
                                    handleMethod={onHeadingClick}
                                />
                                {usePage().props.auth.user.editor == true && (
                                    <th className="w-1/4">Action</th>
                                )}
                            </tr>
                        </thead>
                        <tbody>
                            {sections.length != 0 ? (
                                sections.map((section) => (
                                    <SectionRow key={section.id} {...section} />
                                ))
                            ) : (
                                <tr className="odd:bg-neutral-50">
                                    <td
                                        colSpan={2}
                                        className="py-2 text-center"
                                    >
                                        No sections found
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </DashboardLayout>
    );
}
