import { GoAlertFill } from "react-icons/go";
import FormInput from "../FormInput";

export default function ProfileLoginDetails({ name, email }) {
    return (
        <div className="bg-white rounded-lg shadow p-6">
            <h2 className="font-bold text-xl">Login details</h2>
            <div className="flex flex-row gap-2 mt-3 w-full">
                <FormInput
                    label="Username"
                    value={name}
                    readOnly
                    className="flex-1"
                />
                <FormInput
                    label="Email"
                    value={email}
                    readOnly
                    className="flex-1"
                />
            </div>
            <div className="mt-2 flex flex-row gap-4 items-center bg-amber-400/40 p-3 rounded-lg text-amber-800">
                <GoAlertFill size={32} />
                <p>
                    Your firstname and lastname are tied to username and email.
                    When updating your name these fields will automatically
                    update. Pay attention to your email when logging in.
                </p>
            </div>
        </div>
    );
}
