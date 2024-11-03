import { Link } from "@inertiajs/react";

export default function ArticleDisplay({
    title,
    slug,
    small_summary,
    section,
    showSection = true,
}) {
    return (
        <Link href={`/${section}/${slug}`} className="my-2 block">
            {showSection && (
                <Link
                    href={`/${section}`}
                    className="italic text-sm text-indigo-500"
                >
                    {section}
                </Link>
            )}
            <h3 className="font-semibold text-xl hover:text-neutral-800">
                {title}
            </h3>
            <p className="text-neutral-800">{small_summary}</p>
        </Link>
    );
}
