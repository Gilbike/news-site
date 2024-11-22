import Button from "@/Components/Button";
import FormInput from "@/Components/FormInput";
import DashboardLayout from "@/Layouts/DashboardLayout";
import { Link, useForm } from "@inertiajs/react";
import React from "react";
import { MdDelete } from "react-icons/md";

export default function Edit({ journalist }) {
    const fullName = `${journalist.firstname} ${journalist.lastname}`;

    const { data, setData, patch } = useForm({
        title: journalist.title == null ? undefined : journalist.title,
        editor: journalist.editor,
    });

    const submit = (e) => {
        e.preventDefault();

        patch(route("journalists.update", { journalist: journalist.id }));
    };

    return (
        <DashboardLayout page="Edit journalist">
            <div className="bg-white rounded-lg shadow p-6">
                <h2 className="font-bold text-xl mb-6">Edit {fullName}</h2>
                <form onSubmit={submit}>
                    <FormInput
                        fieldName="title"
                        label="Title"
                        value={data.title}
                        onChange={(e) => setData("title", e.target.value)}
                    />

                    <div className="flex flex-row items-center gap-2 mt-2">
                        <input
                            type="checkbox"
                            id="editor"
                            name="editor"
                            checked={data.editor}
                            onChange={(e) =>
                                setData("editor", e.target.checked)
                            }
                        />
                        <label htmlFor="editor">Has editor permissions</label>
                    </div>

                    <Button className="mt-3">Save</Button>
                </form>

                <Link
                    href={route("journalists.destroy", {
                        journalist: journalist.id,
                    })}
                    className="mt-4 rounded p-2 bg-red-500 hover:bg-red-600 text-white flex flex-row items-center gap-1"
                    method="delete"
                    as="button"
                >
                    <MdDelete /> Remove
                </Link>
            </div>
        </DashboardLayout>
    );
}
