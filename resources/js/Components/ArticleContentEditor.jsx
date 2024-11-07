import { useRef } from "react";
import { FaParagraph } from "react-icons/fa";

export default function ArticleContentEditor({ onChangeHandler }) {
    const areaRef = useRef(null);

    const onChange = (e) => {
        areaRef.current.style.height = "0px";

        const calculatedHeight =
            areaRef.current.scrollHeight < 138
                ? 138
                : areaRef.current.scrollHeight;
        areaRef.current.style.height = `${calculatedHeight}px`;

        onChangeHandler?.(areaRef.current.value);
    };

    const identifiers = {
        paragraph: ":p",
    };

    const addParagraph = (identifier) => {
        let newLine = "";
        if (areaRef.current.value != "") newLine = "\n";
        areaRef.current.value += `${newLine}${identifier}\n`;
        areaRef.current.focus();
    };

    return (
        <div className="bg-white rounded-lg shadow p-6 mt-3">
            <div className="flex flex-row gap-2 mb-2">
                <button
                    onClick={() => addParagraph(identifiers.paragraph)}
                    className="rounded-md bg-neutral-50 hover:bg-neutral-100 hover:shadow-lg p-2"
                >
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
