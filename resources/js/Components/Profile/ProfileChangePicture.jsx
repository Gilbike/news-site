import FormInput from "../FormInput";
import Button from "../Button";

export default function ProfileChangePicture({ profilepicture }) {
    // const { data, setData, patch, errors, processing } = useForm({
    //     firstname,
    //     lastname,
    // });

    // const submit = (e) => {
    //     e.preventDefault();

    //     patch(route("profile.update"));
    // };

    return (
        <div className="bg-white rounded-lg shadow p-6 mt-3">
            <h2 className="font-bold text-xl">Change profile picture</h2>
            <div className="w-24 h-24 bg-neutral-200 relative">
                <img src={profilepicture} class="h-full" />
            </div>
            <form className="flex flex-col gap-3 mt-3 w-full">
                <input type="file" name="profilepicture" id="profilepicture" />

                <Button>Save</Button>
            </form>
        </div>
    );
}
