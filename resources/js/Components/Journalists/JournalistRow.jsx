import { Link, usePage } from "@inertiajs/react";
import React from "react";
import { MdPerson } from "react-icons/md";

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
        <tr className="even:bg-neutral-100 odd:bg-neutral-50">
            <td className="px-1">{id}</td>
            <td>
                {firstname} {lastname}
            </td>
            <td>{email}</td>
            <td>{isEditor ? "Yes" : "No"}</td>
            <td className={`${hasTitle ? "text-black" : "text-neutral-600"}`}>
                {title ? title : "N/A"}
            </td>
            {usePage().props.auth.user.editor && (
                <td className="py-2 flex flex-row gap-1 justify-center">
                    <Link
                        href={route("journalists.edit", { journalist: id })}
                        className="rounded p-2 bg-indigo-500 hover:bg-indigo-600 text-white "
                    >
                        <MdPerson />
                    </Link>
                </td>
            )}
        </tr>
    );
}
