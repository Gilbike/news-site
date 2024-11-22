import Button from "@/Components/Button";
import FormInput from "@/Components/FormInput";
import Pagination from "@/Components/Pagination";
import DashboardLayout from "@/Layouts/DashboardLayout";
import { Link, useForm } from "@inertiajs/react";
import React from "react";
import { MdDelete } from "react-icons/md";

export default function Edit({ journalist, articles }) {
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
            <h1 className="text-3xl font-bold mb-3">{fullName}</h1>
            <div className="bg-white rounded-lg shadow p-6 mb-2">
                <h2 className="font-bold text-xl mb-2">Articles</h2>
                <div className="mb-2">
                    {articles.data.map((article) => (
                        <div className="p-2 border border-neutral-600 roudned [&:not(:last-child)]:border-b-0 first:rounded-t-lg last:rounded-b-lg font-semibold">
                            {article.title}
                        </div>
                    ))}
                </div>
                <Pagination links={articles.links} />
            </div>
            <div className="bg-white rounded-lg shadow p-6">
                <h2 className="font-bold text-xl mb-2">Edit {fullName}</h2>
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
