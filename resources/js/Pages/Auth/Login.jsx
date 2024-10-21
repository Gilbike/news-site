import Button from "@/Components/Button";
import FormInput from "@/Components/FormInput";
import { Head, useForm } from "@inertiajs/react";

export default function Login() {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
        remember: false,
    });

    const submit = (e) => {
        e.preventDefault();

        post(route("login"), {
            onFinish: () => reset("password"),
        });
    };

    return (
        <>
            <Head title="Login as journalist" />

            <div className="flex min-h-screen flex-col items-center bg-neutral-100 justify-center">
                <form
                    onSubmit={submit}
                    className="w-11/12 md:w-5/12 xl:w-3/12 p-6 bg-white rounded-lg drop-shadow"
                >
                    <h1 className="text-center text-2xl font-bold">
                        Journalist Login
                    </h1>
                    <FormInput
                        fieldName="email"
                        label="Email"
                        type="email"
                        value={data.email}
                        onChange={(e) => setData("email", e.target.value)}
                        error={errors.email}
                        className="mt-2"
                    />

                    <FormInput
                        fieldName="password"
                        label="Password"
                        type="password"
                        value={data.password}
                        onChange={(e) => setData("password", e.target.value)}
                        error={errors.password}
                        className="mt-2"
                    />

                    <Button className="mt-6 w-full" disabled={processing}>
                        Login
                    </Button>
                </form>
            </div>
        </>
    );
}
