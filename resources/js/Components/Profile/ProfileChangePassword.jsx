import { useForm } from "@inertiajs/react";
import FormInput from "../FormInput";
import Button from "../Button";
import { FaCheckCircle } from "react-icons/fa";

export default function ProfileChangePassword() {
    const {
        data,
        setData,
        put,
        errors,
        processing,
        reset,
        recentlySuccessful,
    } = useForm({
        current_password: "",
        password: "",
        password_confirmation: "",
    });

    const submit = (e) => {
        e.preventDefault();

        put(route("profile.password.update"), {
            onSuccess: () => reset(),
        });
    };

    return (
        <div className="bg-white rounded-lg shadow p-6 mt-3">
            <h2 className="font-bold text-xl">Change password</h2>
            {recentlySuccessful && (
                <div className="mt-2 flex flex-row gap-4 items-center bg-green-400/40 p-3 rounded-lg text-green-800">
                    <FaCheckCircle size={32} />
                    <p>
                        Password changed successfull, you can use it next time
                        you log in
                    </p>
                </div>
            )}
            <form className="flex flex-col gap-3 mt-3 w-full" onSubmit={submit}>
                <FormInput
                    fieldName="current_password"
                    error={errors.current_password}
                    label="Current password"
                    value={data.current_password}
                    onChange={(e) =>
                        setData("current_password", e.target.value)
                    }
                    type="password"
                    className="flex-1"
                />
                <div className="flex flex-row gap-2">
                    <FormInput
                        fieldName="password"
                        error={errors.password}
                        label="New password"
                        value={data.password}
                        onChange={(e) => setData("password", e.target.value)}
                        type="password"
                        className="flex-1"
                    />
                    <FormInput
                        fieldName="password_confirmation"
                        error={errors.password_confirmation}
                        label="Confirm new password"
                        value={data.password_confirmation}
                        className="flex-1"
                        type="password"
                        onChange={(e) =>
                            setData("password_confirmation", e.target.value)
                        }
                    />
                </div>

                <Button disabled={processing}>Save</Button>
            </form>
        </div>
    );
}
