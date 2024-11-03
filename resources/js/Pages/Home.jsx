import ArticleDisplay from "@/Components/ArticleDisplay";
import Layout from "@/Layouts/Layout";

export default function Home({ articles }) {
    return (
        <Layout page="Home">
            <h2 className="text-2xl font-bold">Latest news</h2>
            {articles.map((article) => (
                <ArticleDisplay {...article} section={article.section.name} />
            ))}
        </Layout>
    );
}
