import JournalistRow from "@/Components/Journalists/JournalistRow";
import TableSortColumn from "@/Components/TableSortColumn";
import DashboardLayout from "@/Layouts/DashboardLayout";
import { Link, router, usePage } from "@inertiajs/react";
import React from "react";

export default function Index({ journalists }) {
    const params = new URLSearchParams(window.location.search);
    const orderBy = params.get("ord") || "id";
    const orderDirection = params.get("dir") || "asc";

    const onHeadingClick = (column) => {
        let queryParams = { ord: column };

        if (orderBy == column) {
            if (orderDirection == "desc") {
                queryParams["dir"] = "asc";
            } else {
                queryParams["dir"] = "desc";
            }
        }

        router.get(route(route().current()), queryParams);
    };

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

                <div className="overflow-auto">
                    <table className="w-full rounded overflow-hidden">
                        <thead className="bg-neutral-100">
                            <tr>
                                <TableSortColumn
                                    label="#"
                                    orderColumn="id"
                                    orderBy={orderBy}
                                    orderDirection={orderDirection}
                                    handleMethod={onHeadingClick}
                                />
                                <TableSortColumn
                                    label="Name"
                                    orderColumn="name"
                                    orderBy={orderBy}
                                    orderDirection={orderDirection}
                                    handleMethod={onHeadingClick}
                                />
                                <TableSortColumn
                                    label="Email"
                                    orderColumn="email"
                                    orderBy={orderBy}
                                    orderDirection={orderDirection}
                                    handleMethod={onHeadingClick}
                                />
                                <th className="text-left">Editor?</th>
                                <th className="text-left">Title</th>
                                {usePage().props.auth.user.editor == true && (
                                    <th></th>
                                )}
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
            </div>
        </DashboardLayout>
    );
}
