import Button from "../Button";
import { useForm } from "@inertiajs/react";

export default function ProfileChangePicture({ profilepicture }) {
    const { data, setData, post, errors, processing } = useForm({
        profilepicture: null,
    });

    console.log(errors);

    const submit = (e) => {
        e.preventDefault();

        post(route("profile.picture.update"));
    };

    return (
        <div className="bg-white rounded-lg shadow p-6 mt-3">
            <h2 className="font-bold text-xl">Change profile picture</h2>
            <div className="w-24 h-24 bg-neutral-200 relative">
                <img
                    src={`data:image/jpg;base64,${profilepicture}`}
                    className="h-full"
                />
            </div>
            <form
                className="flex flex-col gap-3 mt-3 w-full"
                onSubmit={submit}
                encType="multipart/form-data"
            >
                <input
                    onChange={(e) =>
                        setData("profilepicture", e.target.files[0])
                    }
                    type="file"
                    name="profilepicture"
                    id="profilepicture"
                />

                <Button disabled={processing}>Save</Button>
            </form>
        </div>
    );
}
