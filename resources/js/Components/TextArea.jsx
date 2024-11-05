export default function TextArea({ ...props }) {
    return (
        <textarea
            className="block resize-none border border-neutral-600 rounded-md outline-none w-full p-2"
            {...props}
        />
    );
}
