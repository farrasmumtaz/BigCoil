import { useEffect, useState } from "react";
import { articleApi } from "../../services/article";

const API_URL = import.meta.env.VITE_API_URL;

function Flourish() {
    return (
        <svg width="120" height="16" viewBox="0 0 120 16">
            <line x1="0" y1="8" x2="46" y2="8" stroke="#B8935F" />
            <path d="M60 2 L66 8 L60 14 L54 8 Z" fill="#B8935F" />
            <line x1="74" y1="8" x2="120" y2="8" stroke="#B8935F" />
        </svg>
    );
}

export default function Article() {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [category, setCategory] = useState("Semua");
    useEffect(() => {
        let ignore = false;

        async function fetchArticles() {
            setLoading(true);

            try {
                const data =
                    category === "Semua"
                        ? await articleApi.getAll()
                        : await articleApi.getByCategory(category);

                if (!ignore) setArticles(data);
            } catch (err) {
                if (!ignore) console.error(err);
            } finally {
                if (!ignore) setLoading(false);
            }
        }

        fetchArticles();

        return () => {
            ignore = true;
        };
    }, [category]);

    const [categories, setCategories] = useState(["Semua"]);
    useEffect(() => {
        async function loadCategories() {
            try {
                const data = await articleApi.getCategories();

                setCategories([
                    "Semua",
                    ...data.map(item => item.name)
                ]);
            } catch (err) {
                console.error(err);
            }
        }

        loadCategories();
    }, []);

    return (
        <section className="bg-[#FAF6EE] py-24">
            <div className="mx-auto max-w-7xl px-6">
                {/* Heading */}
                <div className="mb-16 text-center">
                    <h1
                        className="text-6xl text-[#2A2010]"
                        style={{
                            fontFamily: "'Cormorant Garamond', serif",
                        }}
                    >
                        ARTIKEL & BERITA
                    </h1>

                    <div className="mt-5 flex justify-center">
                        <Flourish />
                    </div>

                    <p className="mx-auto mt-6 max-w-3xl text-[#6D5C45]">
                        Temukan berbagai artikel mengenai kualitas tidur, kesehatan,
                        lifestyle, dan berita terbaru dari BigKoil.
                    </p>
                </div>

                {/* Filter */}
                <div className="mb-14 flex flex-wrap justify-center gap-3">
                    {categories.map((item) => (
                        <button
                            key={item}
                            onClick={() => setCategory(item)}
                            className={`rounded-full border px-6 py-2 text-sm transition ${category === item
                                ? "border-[#B8935F] bg-[#B8935F] text-white"
                                : "border-[#D7C6AA] bg-white text-[#6D5C45] hover:border-[#B8935F] hover:text-[#B8935F]"
                                }`}
                        >
                            {item}
                        </button>
                    ))}
                </div>

                {/* Loading */}
                {loading ? (
                    <div className="py-20 text-center">
                        Loading...
                    </div>
                ) : articles.length === 0 ? (
                    <div className="py-20 text-center text-[#8A7550]">
                        Belum ada artikel.
                    </div>
                ) : (
                    <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
                        {articles.map((article) => (
                            <a
                                key={article.id}
                                href={article.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group overflow-hidden rounded-3xl bg-white shadow-xl transition duration-300 hover:-translate-y-2"
                            >
                                <img
                                    src={`${API_URL}${article.image}`}
                                    alt={article.title}
                                    className="aspect-4/3 w-full object-cover transition duration-500 group-hover:scale-105"
                                />

                                <div className="space-y-3 p-6">
                                    <span className="inline-flex rounded-full bg-[#F5E7CF] px-3 py-1 text-xs font-medium uppercase tracking-wider text-[#9B6B2D]">
                                        {article.category}
                                    </span>

                                    <h2
                                        className="line-clamp-2 text-3xl text-[#2A2010]"
                                        style={{
                                            fontFamily: "'Cormorant Garamond', serif",
                                        }}
                                    >
                                        {article.title}
                                    </h2>

                                    <p className="text-sm text-[#B8935F]">
                                        {new Date(article.publishDate).toLocaleDateString(
                                            "id-ID",
                                            {
                                                day: "numeric",
                                                month: "long",
                                                year: "numeric",
                                            }
                                        )}
                                    </p>

                                    <p className="line-clamp-3 text-[#6D5C45]">
                                        {article.description}
                                    </p>

                                    <div className="pt-2 font-medium text-[#B8935F] transition group-hover:translate-x-1">
                                        Baca Selengkapnya →
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}