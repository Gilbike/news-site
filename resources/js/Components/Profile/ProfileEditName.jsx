import { useForm } from "@inertiajs/react";
import FormInput from "../FormInput";
import Button from "../Button";

export default function ProfileEditName({ firstname, lastname }) {
    const { data, setData, patch, errors, processing } = useForm({
        firstname,
        lastname,
    });

    return (
        <div className="bg-white rounded-lg shadow p-6 mt-3">
            <h2 className="font-bold text-xl">Personal information</h2>
            <form className="flex flex-col gap-3 mt-3 w-full">
                <div className="flex flex-row gap-2">
                    <FormInput
                        fieldName="firstname"
                        error={errors.firstname}
                        label="Firstname"
                        value={data.firstname}
                        onChange={(e) => setData("firstname", e.target.value)}
                        className="flex-1"
                    />
                    <FormInput
                        fieldName="lastname"
                        error={errors.lastname}
                        label="Lastname"
                        value={data.lastname}
                        className="flex-1"
                        onChange={(e) => setData("lastname", e.target.value)}
                    />
                </div>

                <Button disabled={processing}>Save</Button>
            </form>
        </div>
    );
}
