import { Link, usePage } from "@inertiajs/react";
import React from "react";

export default function SectionRow({ id, name }) {
    return (
        <tr className="text-center even:bg-neutral-100 odd:bg-neutral-50">
            <td>{name}</td>
            {usePage().props.auth.user.editor && (
                <td className="py-2 flex flex-col gap-1">
                    <>
                        <Link
                            href={"/"}
                            className="rounded p-1 bg-indigo-500 hover:bg-indigo-600 text-white "
                        >
                            Edit
                        </Link>
                        <Link
                            href={"/"}
                            className="rounded p-1 bg-red-500 hover:bg-red-600 text-white"
                            method="delete"
                            as="button"
                        >
                            Delete
                        </Link>
                    </>
                </td>
            )}
        </tr>
    );
}
