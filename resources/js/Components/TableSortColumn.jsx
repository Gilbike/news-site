import { FaChevronUp, FaChevronDown } from "react-icons/fa";

export default function TableSortColumn({
    label,
    orderColumn,
    orderBy,
    orderDirection,
    handleMethod,
}) {
    const downColor =
        orderBy == orderColumn && orderDirection == "desc"
            ? "text-black"
            : "text-neutral-400";

    const upColor =
        orderBy == orderColumn && orderDirection == "asc"
            ? "text-black"
            : "text-neutral-400";

    return (
        <th
            className="py-2 cursor-pointer"
            onClick={() => handleMethod(orderColumn)}
        >
            <div className="flex flex-row gap-2 px-1 items-center">
                {label}
                <span className="flex flex-col">
                    <FaChevronUp size={10} className={upColor} />
                    <FaChevronDown size={10} className={downColor} />
                </span>
            </div>
        </th>
    );
}
