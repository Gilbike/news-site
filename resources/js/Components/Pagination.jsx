import { Link } from "@inertiajs/react";

export default function Pagination({ links }) {
    return (
        <div className="m-auto w-fit gap-2">
            {links.map((link) => (
                <Link
                    key={link.label}
                    href={link.url}
                    className={`${
                        link.active && "bg-indigo-500 text-white"
                    } inline-block py-2 px-4 [&:not(:last-child)]:border-r-0 border border-neutral-600 first:rounded-l-md last:rounded-r-md`}
                    dangerouslySetInnerHTML={{ __html: link.label }}
                ></Link>
            ))}
        </div>
    );
}
