import { Link, useForm, usePage } from "@inertiajs/react";
import React, { useState } from "react";
import Input from "../Input";
import Button from "../Button";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

export default function SectionRow({ id, name }) {
    const [editing, setEditing] = useState(false);

    const { data, setData, patch, processing } = useForm({
        name: name,
    });

    const submit = (e) => {
        e.preventDefault();

        patch(route("sections.update", { section: id }), {
            onFinish: () => setEditing(false),
        });
    };

    return (
        <tr className="text-left even:bg-neutral-100 odd:bg-neutral-50">
            <td className="px-2">
                {editing ? (
                    <form
                        onSubmit={submit}
                        className="px-2 flex flex-row gap-2"
                    >
                        <Input
                            value={data.name}
                            onChange={(e) => setData("name", e.target.value)}
                        />
                        <Button disabled={processing}>Save</Button>
                    </form>
                ) : (
                    name
                )}
            </td>
            {usePage().props.auth.user.editor && (
                <td className="py-1 flex flex-row gap-1 justify-center">
                    <button
                        className="rounded bg-indigo-500 hover:bg-indigo-600 text-white p-2"
                        onClick={() => setEditing(!editing)}
                    >
                        <FaEdit />
                    </button>
                    <Link
                        href={route("sections.destroy", { section: id })}
                        className="rounded p-2 bg-red-500 hover:bg-red-600 text-white"
                        method="delete"
                        as="button"
                    >
                        <MdDelete />
                    </Link>
                </td>
            )}
        </tr>
    );
}
