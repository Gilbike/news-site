import ArticleDisplay from "@/Components/ArticleDisplay";
import Layout from "@/Layouts/Layout";

export default function Section({ sectionName, articles }) {
    return (
        <Layout page="Home">
            <h2 className="text-2xl font-bold">Latest {sectionName} news</h2>
            {articles.map((article) => (
                <ArticleDisplay
                    {...article}
                    section={sectionName}
                    showSection={false}
                    key={article.slug}
                />
            ))}
        </Layout>
    );
}
