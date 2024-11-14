import ArticleDisplay from "@/Components/ArticleDisplay";
import Pagination from "@/Components/Pagination";
import Layout from "@/Layouts/Layout";

export default function Author({ journalist, articles }) {
    return (
        <Layout page={`${journalist.firstname} ${journalist.lastname}`}>
            <h1 className="font-bold text-2xl">
                {journalist.firstname} {journalist.lastname}
            </h1>
            {articles.data.map((article) => (
                <ArticleDisplay
                    {...article}
                    section={article.section}
                    showSection={true}
                    key={article.slug}
                />
            ))}
            <Pagination links={articles.links} />
        </Layout>
    );
}
