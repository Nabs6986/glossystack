import type { Metadata } from "next";
import Link from "next/link";
import { posts } from "./_data/posts";

export const metadata: Metadata = {
  title: "Salon Software Blog | Glossy Stack",
  description:
    "Guides, comparisons, and practical growth tactics for salon owners evaluating booking and management software.",
  alternates: { canonical: "https://glossystack.com/blog" },
};

export default function BlogIndexPage() {
  const postList = Object.values(posts).sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );

  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-4xl mx-auto px-4 py-12">
        <header className="mb-10">
          <h1 className="text-4xl font-bold mb-4">Glossy Stack Blog</h1>
          <p className="text-xl text-gray-600">
            Data-backed guides for salon growth, client retention, and software selection.
          </p>
        </header>

        <div className="space-y-6">
          {postList.map((post) => (
            <article key={post.slug} className="rounded-xl border border-gray-200 p-6 hover:border-pink-300 transition-colors">
              <Link href={`/blog/${post.slug}`} className="block">
                <div className="text-sm text-gray-500 mb-2">
                  {new Date(post.publishedAt).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}{" "}
                  · {post.readingTime} min read
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">{post.title}</h2>
                <p className="text-gray-600">{post.excerpt}</p>
              </Link>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}
