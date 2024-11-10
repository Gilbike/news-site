import ArticleDisplay from "@/Components/ArticleDisplay";
import Pagination from "@/Components/Pagination";
import Layout from "@/Layouts/Layout";

export default function Section({ sectionName, articles }) {
    return (
        <Layout page={sectionName}>
            <h2 className="text-2xl font-bold">Latest {sectionName} news</h2>
            {articles.data.map((article) => (
                <ArticleDisplay
                    {...article}
                    section={sectionName}
                    showSection={false}
                    key={article.slug}
                />
            ))}
            <Pagination links={articles.links} />
        </Layout>
    );
}
