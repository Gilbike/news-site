import Button from "@/Components/Button";
import FormInput from "@/Components/FormInput";
import TextArea from "@/Components/TextArea";
import DashboardLayout from "@/Layouts/DashboardLayout";
import { Link, useForm } from "@inertiajs/react";
import { useState } from "react";
import { MdDelete } from "react-icons/md";

export default function Edit({ article }) {
    const { data, setData, errors, processing, patch } = useForm({
        title: article.title,
        slug: article.slug,
        small_summary: article.small_summary,
        large_summary: article.large_summary,
    });

    const [customSlug, setCustomSlug] = useState("");

    const submitArticle = () => {
        if (customSlug != undefined && customSlug !== "") {
            setData((data) => ({ ...data, slug: customSlug }));
        }

        patch(route("article.update", { article: article.id }));
    };

    return (
        <DashboardLayout page={`Edit: ${data.title}`}>
            <div className="flex flex-row justify-between mb-2">
                <h1 className="font-bold text-2xl mb-2">Edit article</h1>
                <Link
                    className="flex flex-row gap-1 items-center py-1 px-2 bg-red-500 hover:bg-red-600 rounded-md text-white"
                    method="delete"
                    as="button"
                    href={route("article.destroy", { article: article.id })}
                >
                    <MdDelete />
                    Delete
                </Link>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
                <h2 className="font-bold text-xl">Article header</h2>
                <div className="flex flex-col gap-2 mt-3 w-full">
                    <FormInput
                        fieldName="title"
                        label="Title"
                        error={errors.title}
                        value={data.title}
                        onChange={(e) => setData("title", e.target.value)}
                    />
                    <FormInput
                        fieldName="slug"
                        label="Custom slug"
                        placeholder={data.slug}
                        error={errors.slug}
                        value={customSlug}
                        onChange={(e) => setCustomSlug(e.target.value)}
                    />

                    <div>
                        <label
                            htmlFor="small_summary"
                            className="text-sm leading-tight text-neutral-800"
                        >
                            Small Summary
                        </label>
                        <TextArea
                            id="small_summary"
                            rows={3}
                            value={data.small_summary}
                            onChange={(e) =>
                                setData("small_summary", e.target.value)
                            }
                        />
                        {errors.small_summary && (
                            <p className="text-red-500 text-sm">
                                {errors.small_summary}
                            </p>
                        )}
                    </div>

                    <div>
                        <label
                            htmlFor="large_summary"
                            className="text-sm leading-tight text-neutral-800"
                        >
                            Large Summary
                        </label>
                        <TextArea
                            id="large_summary"
                            rows={8}
                            value={data.large_summary}
                            onChange={(e) =>
                                setData("large_summary", e.target.value)
                            }
                        />
                        {errors.small_summary && (
                            <p className="text-red-500 text-sm">
                                {errors.large_summary}
                            </p>
                        )}
                    </div>
                </div>
            </div>

            <Button
                disabled={processing}
                className="w-full mt-3"
                onClick={submitArticle}
            >
                Save
            </Button>
        </DashboardLayout>
    );
}
