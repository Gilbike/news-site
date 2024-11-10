import ArticleDisplay from "@/Components/ArticleDisplay";
import Layout from "@/Layouts/Layout";
import { Link } from "@inertiajs/react";

export default function Home({ articles }) {
    return (
        <Layout page="Home">
            <h2 className="text-2xl font-bold">Latest news</h2>
            {articles.data.map((article) => (
                <ArticleDisplay
                    key={article.id}
                    {...article}
                    section={article.section.name}
                />
            ))}
            <div className="m-auto w-fit gap-2">
                {articles.links.map((link) => (
                    <Link
                        href={link.url}
                        className={`${
                            link.active && "bg-indigo-500 text-white"
                        } inline-block py-2 px-4 [&:not(:last-child)]:border-r-0 border border-neutral-600 first:rounded-l-md last:rounded-r-md`}
                        dangerouslySetInnerHTML={{ __html: link.label }}
                    ></Link>
                ))}
            </div>
        </Layout>
    );
}
