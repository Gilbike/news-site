import ArticleDisplay from "@/Components/ArticleDisplay";
import Pagination from "@/Components/Pagination";
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
            <Pagination links={articles.links} />
        </Layout>
    );
}
