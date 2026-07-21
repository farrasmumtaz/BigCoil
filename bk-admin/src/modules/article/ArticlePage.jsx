import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import ArticleForm from "./ArticleForm";
import ArticleTable from "./ArticleTable";
import ArticleService from "./article.service";

export default function ArticlePage() {
  const [articles, setArticles] =
    useState([]);

  const [selectedArticle, setSelectedArticle] =
    useState(null);

  const [loading, setLoading] =
    useState(true);

  const fetchArticles = async () => {
    try {
      const data =
        await ArticleService.getAll();

      setArticles(data);
    } catch (err) {
      console.error(err);

      toast.error(
        "Gagal mengambil data."
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  const handleSuccess = () => {
    setSelectedArticle(null);

    fetchArticles();
  };

  const handleDelete = async (id) => {
    const ok = window.confirm(
      "Yakin ingin menghapus data ini?"
    );

    if (!ok) return;

    try {
      await ArticleService.remove(id);

      fetchArticles();
    } catch (err) {
      console.error(err);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="space-y-8">
      <ArticleForm
        article={selectedArticle}
        onSuccess={handleSuccess}
      />

      <ArticleTable
        data={articles}
        onEdit={setSelectedArticle}
        onDelete={handleDelete}
      />
    </div>
  );
}