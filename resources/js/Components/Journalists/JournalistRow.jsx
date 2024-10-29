import { Link, usePage } from "@inertiajs/react";
import React from "react";

export default function JournalistRow({
    id,
    firstname,
    lastname,
    email,
    editor,
    title,
}) {
    const isEditor = editor == true;
    const hasTitle = title != null && title != undefined && title != "";

    return (
        <tr className="text-center even:bg-neutral-100 odd:bg-neutral-50">
            <td>{id}</td>
            <td>
                {firstname} {lastname}
            </td>
            <td>{email}</td>
            <td>{isEditor ? "Yes" : "No"}</td>
            <td className={`${hasTitle ? "text-black" : "text-neutral-600"}`}>
                {title ? title : "N/A"}
            </td>
            {usePage().props.auth.user.editor && (
                <td className="py-2 flex flex-col gap-1">
                    <>
                        <Link
                            href={route("journalists.edit", { journalist: id })}
                            className="rounded p-1 bg-indigo-500 hover:bg-indigo-600 text-white "
                        >
                            Edit
                        </Link>
                        <Link
                            href={route("journalists.destroy", {
                                journalist: id,
                            })}
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
