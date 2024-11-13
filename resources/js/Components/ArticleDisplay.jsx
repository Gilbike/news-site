import { Link } from "@inertiajs/react";

export default function ArticleDisplay({
    title,
    slug,
    small_summary,
    section,
    showSection = true,
}) {
    return (
        <div className="my-2">
            {showSection && (
                <Link
                    href={`/${section}`}
                    className="italic md:text-sm text-indigo-600"
                >
                    {section}
                </Link>
            )}
            <Link href={`/${section}/${slug}`} className="block">
                <h3 className="font-semibold text-xl hover:text-neutral-800">
                    {title}
                </h3>
                <p className="text-neutral-800">{small_summary}</p>
            </Link>
        </div>
    );
}
