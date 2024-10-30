import Button from "@/Components/Button";
import FormInput from "@/Components/FormInput";
import DashboardLayout from "@/Layouts/DashboardLayout";
import { useForm } from "@inertiajs/react";
import React from "react";

export default function Create() {
    const { data, setData, errors, post, processing } = useForm({
        name: "",
    });

    const submit = (e) => {
        e.preventDefault();

        post(route("sections.store"));
    };

    return (
        <DashboardLayout>
            <div className="bg-white rounded-lg shadow p-6">
                <h2 className="font-bold text-xl mb-3">Create new section</h2>
                <form className="flex flex-col gap-2 w-full" onSubmit={submit}>
                    <FormInput
                        className="w-full"
                        label="Name"
                        fieldName="Name"
                        value={data.name}
                        onChange={(e) => setData("name", e.target.value)}
                        error={errors.name}
                    />
                    <Button disabled={processing}>Done</Button>
                </form>
            </div>
        </DashboardLayout>
    );
}
