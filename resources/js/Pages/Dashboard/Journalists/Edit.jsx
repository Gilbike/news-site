import Button from "@/Components/Button";
import FormInput from "@/Components/FormInput";
import DashboardLayout from "@/Layouts/DashboardLayout";
import { useForm } from "@inertiajs/react";
import React from "react";

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
            </div>
        </DashboardLayout>
    );
}
