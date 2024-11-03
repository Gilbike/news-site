import Layout from "@/Layouts/Layout";

export default function Section({ sectionName, articles }) {
    return (
        <Layout page="Home">
            <h2 className="text-2xl font-bold">Latest {sectionName} news</h2>
            {articles.map((article) => (
                <div className="my-2">
                    <h3 className="font-semibold text-xl">{article.title}</h3>
                    <p>{article.small_summary}</p>
                </div>
            ))}
        </Layout>
    );
}
