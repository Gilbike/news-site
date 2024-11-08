import Button from "@/Components/Button";
import FormInput from "@/Components/FormInput";
import DashboardLayout from "@/Layouts/DashboardLayout";
import { useForm } from "@inertiajs/react";
import React from "react";

export default function Create() {
    const { data, setData, errors, post, processing, reset } = useForm({
        firstname: "",
        lastname: "",
    });

    const submit = (e) => {
        e.preventDefault();

        post(route("journalists.store"));
    };

    return (
        <DashboardLayout page="Add journalist">
            <div className="bg-white rounded-lg shadow p-6">
                <h2 className="font-bold text-xl mb-6">Hire new journalist</h2>
                <form className="flex flex-col gap-2 w-full" onSubmit={submit}>
                    <div className="flex flex-col lg:flex-row gap-2">
                        <FormInput
                            className="w-full"
                            label="Firstname"
                            fieldName="firstname"
                            value={data.firstname}
                            onChange={(e) =>
                                setData("firstname", e.target.value)
                            }
                            error={errors.firstname}
                        />
                        <FormInput
                            className="w-full"
                            label="Lastname"
                            fieldName="Lastname"
                            value={data.lastname}
                            onChange={(e) =>
                                setData("lastname", e.target.value)
                            }
                            error={errors.lastname}
                        />
                    </div>
                    <Button disabled={processing}>Done</Button>
                </form>
            </div>
        </DashboardLayout>
    );
}
