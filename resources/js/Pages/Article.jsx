import Layout from "@/Layouts/Layout";
import { Link, usePage } from "@inertiajs/react";

export default function Article({
    article,
    section,
    author,
    paragraphs,
    isDraft,
}) {
    return (
        <Layout page={article.title}>
            {isDraft && (
                <div className="border border-yellow-500 bg-yellow-500/30 p-2 rounded mb-4 text-yellow-800">
                    <h3 className="font-semibold text-lg">
                        This article is a draft!
                    </h3>
                    <p>It needs to be reviewed by an editor to be published</p>
                    {usePage().props.auth.user.editor && (
                        <div className="flex justify-end">
                            <Link
                                className="px-4 py-2 rounded-md bg-yellow-500/80 text-black hover:bg-yellow-600/80"
                                as="button"
                                href={route("article.publish", {
                                    section,
                                    article,
                                })}
                                method="post"
                            >
                                Approve and publish
                            </Link>
                        </div>
                    )}
                </div>
            )}

            <Link href={`/${section.name}`} className="italic font-light">
                {section.name}
            </Link>
            <h1 className="text-4xl font-bold border-b border-neutral-400 py-2 mb-4">
                {article.title}
            </h1>
            <div className="flex flex-col mb-4">
                <Link
                    href={route("author", { journalist: author.name })}
                    className="text-indigo-500 leading-tight"
                >
                    {author.firstname} {author.lastname}
                </Link>
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
            {paragraphs.map((paragraph) => (
                <p key={paragraph} className="mt-2">
                    {paragraph}
                </p>
            ))}
        </Layout>
    );
}
