import { useRef } from "react";
import { FaParagraph } from "react-icons/fa";

export default function ArticleContentEditor() {
    const areaRef = useRef(null);

    const onChange = (e) => {
        console.log(e.target.value);

        areaRef.current.style.height = "0px";

        const calculatedHeight =
            areaRef.current.scrollHeight < 138
                ? 138
                : areaRef.current.scrollHeight;
        areaRef.current.style.height = `${calculatedHeight}px`;
    };

    return (
        <div className="bg-white rounded-lg shadow p-6 mt-3">
            <div className="flex flex-row gap-2 mb-2">
                <button className="rounded-md bg-neutral-50 hover:bg-neutral-100 hover:shadow-lg p-2">
                    <FaParagraph size={16} />
                </button>
            </div>
            <textarea
                ref={areaRef}
                rows={5}
                className="w-full resize-none border border-neutral-600 p-2 rounded-md"
                onChange={onChange}
            />
        </div>
    );
}
