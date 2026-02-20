import { notFound } from "next/navigation";
import { posts } from "../_data/posts";

export async function generateStaticParams() {
  return Object.keys(posts).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = posts[params.slug];
  if (!post) return { title: "Post Not Found" };
  return {
    title: post.metaTitle,
    description: post.metaDescription,
  };
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = posts[params.slug];
  if (!post) notFound();

  return (
    <div className="min-h-screen bg-white">
      <article className="max-w-4xl mx-auto px-4 py-12">
        <header className="mb-8">
          <div className="text-sm text-gray-600 mb-4">
            {new Date(post.publishedAt).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })} · {post.readingTime} min read
          </div>
          <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
          <p className="text-xl text-gray-600">{post.excerpt}</p>
        </header>
        <div className="prose max-w-none">
          <div dangerouslySetInnerHTML={{ __html: post.content.replace(/\n\n/g, '</p><p>').replace(/^/, '<p>').replace(/$/, '</p>') }} />
        </div>
      </article>
    </div>
  );
}
