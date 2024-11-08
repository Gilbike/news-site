import ArticleContentEditor from "@/Components/ArticleContentEditor";
import Button from "@/Components/Button";
import FormInput from "@/Components/FormInput";
import Select from "@/Components/Select";
import TextArea from "@/Components/TextArea";
import DashboardLayout from "@/Layouts/DashboardLayout";
import { useForm } from "@inertiajs/react";

export default function Create({ sections }) {
    const sectionOptions = sections.map((section) => {
        return {
            value: section.id,
            label: section.name,
        };
    });

    const { data, setData, errors, processing, post } = useForm({
        title: "",
        section_id: undefined,
        small_summary: "",
        large_summary: "",
        content: "",
    });

    const submitArticle = () => {
        post(route("article.store"));
    };

    return (
        <DashboardLayout
            page={data.title ? `Draft: ${data.title}` : "Write article"}
        >
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
                    <div>
                        <label className="text-sm leading-tight text-neutral-800">
                            Section
                        </label>
                        <Select
                            placeholder="Section"
                            options={sectionOptions}
                            selected={data.section_id}
                            onSelect={(id) => setData("section_id", id)}
                        />
                    </div>

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

            <ArticleContentEditor
                onChangeHandler={(text) => setData("content", text)}
            />

            <Button className="w-full mt-3" onClick={submitArticle}>
                Save
            </Button>
        </DashboardLayout>
    );
}
