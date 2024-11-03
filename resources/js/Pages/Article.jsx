import Layout from "@/Layouts/Layout";
import { Link } from "@inertiajs/react";

export default function Article({ article, section, author }) {
    return (
        <Layout page={article.title}>
            <Link href={`/${section.name}`} className="italic font-light">
                {section.name}
            </Link>
            <h1 className="text-4xl font-bold border-b border-neutral-400 py-2 mb-4">
                {article.title}
            </h1>
            <div className="flex flex-col mb-4">
                <p className="text-indigo-500 leading-tight">
                    {author.firstname} {author.lastname}
                </p>
                {author.title && (
                    <p className="leading-none font-light text-sm italic">
                        {author.title}
                    </p>
                )}
            </div>
            {article.large_summary && (
                <p className="font-semibold text-lg mb-3">
                    {article.large_summary}
                </p>
            )}
        </Layout>
    );
}
