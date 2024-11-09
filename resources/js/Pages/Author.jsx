import ArticleDisplay from "@/Components/ArticleDisplay";
import Layout from "@/Layouts/Layout";

export default function Author({ journalist, articles }) {
    console.log(articles);

    return (
        <Layout page={`${journalist.firstname} ${journalist.lastname}`}>
            <h1 className="font-bold text-2xl">
                {journalist.firstname} {journalist.lastname}
            </h1>
            {articles.map((article) => (
                <ArticleDisplay
                    {...article}
                    section={article.section.name}
                    showSection={true}
                    key={article.slug}
                />
            ))}
        </Layout>
    );
}
