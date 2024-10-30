import { useForm } from "@inertiajs/react";
import FormInput from "../FormInput";
import Button from "../Button";

export default function ProfileChangePassword() {
    const { data, setData, patch, errors, processing } = useForm({
        current_password: "",
        password: "",
        password_confirmation: "",
    });

    return (
        <div className="bg-white rounded-lg shadow p-6 mt-3">
            <h2 className="font-bold text-xl">Change password</h2>
            <form className="flex flex-col gap-3 mt-3 w-full">
                <FormInput
                    fieldName="current_password"
                    error={errors.current_password}
                    label="Current password"
                    value={data.current_password}
                    onChange={(e) =>
                        setData("current_password", e.target.value)
                    }
                    className="flex-1"
                />
                <div className="flex flex-row gap-2">
                    <FormInput
                        fieldName="password"
                        error={errors.password}
                        label="New password"
                        value={data.password}
                        onChange={(e) => setData("password", e.target.value)}
                        className="flex-1"
                    />
                    <FormInput
                        fieldName="password_confirmation"
                        error={errors.password_confirmation}
                        label="Confirm new password"
                        value={data.password_confirmation}
                        className="flex-1"
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
