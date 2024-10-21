import Button from "@/Components/Button";
import FormInput from "@/Components/FormInput";
import { Head, useForm } from "@inertiajs/react";

export default function ConfirmPassword() {
    const { data, setData, post, processing, errors, reset } = useForm({
        password: "",
    });

    const submit = (e) => {
        e.preventDefault();

        post(route("password.confirm"), {
            onFinish: () => reset("password"),
        });
    };

    return (
        <div className="flex min-h-screen flex-col items-center bg-neutral-100 justify-center">
            <Head title="Confirm Password" />

            <div className="w-11/12 md:w-5/12 xl:w-3/12 p-6 bg-white rounded-lg drop-shadow">
                <div className="mb-4 text-sm text-gray-600">
                    This is a secure area of the application. Please confirm
                    your password before continuing.
                </div>

                <form onSubmit={submit}>
                    <FormInput
                        fieldName="password"
                        type="password"
                        value={data.password}
                        onChange={(e) => setData("password", e.target.value)}
                        label="Password"
                        error={errors.password}
                    />

                    <Button className="mt-6 w-full" disabled={processing}>
                        Confirm
                    </Button>
                </form>
            </div>
        </div>
    );
}
