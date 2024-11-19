import DashboardLayout from "@/Layouts/DashboardLayout";
import { Link } from "@inertiajs/react";
import { MdEdit } from "react-icons/md";
import { MdOutlineRateReview } from "react-icons/md";

export default function Dashboard({ articles, drafts }) {
    return (
        <DashboardLayout page="Dashboard">
            <div className="bg-white rounded-lg shadow p-6">
                <h2 className="font-bold text-xl">Your recent articles</h2>
                {articles.length == 0 ? (
                    <p>You have no written articles</p>
                ) : (
                    articles.map((article) => (
                        <div
                            key={article.id}
                            className="flex flex-row items-center gap-1 mb-2 last:mb-0 justify-between p-2 border border-neutral-200 rounded-md"
                        >
                            <p>{article.title}</p>
                            <Link
                                className="flex flex-row gap-1 items-center px-2 py-1 bg-indigo-500 hover:bg-indigo-600 rounded-md text-white"
                                href={route("article.edit", {
                                    article: article.id,
                                })}
                            >
                                <MdEdit />
                                Edit
                            </Link>
                        </div>
                    ))
                )}
            </div>
            {drafts != undefined && (
                <div className="bg-white rounded-lg shadow p-6 mt-2">
                    <h2 className="font-bold text-xl">
                        Articles waiting approval
                    </h2>
                    {drafts.map((draft) => (
                        <div
                            key={draft.id}
                            className="flex flex-row items-center gap-1 mb-2 last:mb-0 justify-between p-2 border border-neutral-200 rounded-md"
                        >
                            <div>
                                <p>{draft.title}</p>
                                <p className="leading-none font-light text-sm">
                                    {draft.section.name}
                                </p>
                            </div>
                            <Link
                                className="flex flex-row gap-1 items-center px-2 py-1 bg-yellow-500 hover:bg-yellow-600 rounded-md text-white"
                                href={route("article.draft", {
                                    article: draft.slug,
                                    section: draft.section,
                                })}
                            >
                                <MdOutlineRateReview />
                                Review
                            </Link>
                        </div>
                    ))}
                </div>
            )}
        </DashboardLayout>
    );
}
