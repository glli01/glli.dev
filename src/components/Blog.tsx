import { formatDate } from "@/lib/utils";
import "@/styles/global.css";
import { getCollection } from "astro:content";

export const metadata = {
  title: "Blog",
};

export default async function BlogPage() {
  const filteredPosts = await getCollection("blog", () => {
    return true;
  });

  return (
    <div className="flex min-h-screen max-w-3xl mx-auto w-3xl bg-background flex-col">
      <main className="flex-1">
        <div className="container max-w-4xl py-6 lg:py-10">
          <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
            <div className="flex-1 space-y-4">
              <h1 className="inline-block font-heading text-4xl tracking-tight lg:text-5xl">
                Blog
              </h1>
              <p className="text-xl text-muted-foreground">
                Random thoughts and technical talks.
              </p>
            </div>
          </div>
          <hr className="my-8" />
          {filteredPosts?.length ? (
            <div className="grid gap-10 sm:grid-cols-2">
              {filteredPosts.map((post: any, index: number) => (
                <article
                  key={index}
                  className="group cursor-pointer relative flex flex-col space-y-2"
                >
                  {post.data.image && (
                    <img
                      src={post.data.image}
                      alt={post.data.title}
                      width={804}
                      height={452}
                      className="rounded-md border bg-muted transition-colors"
                    />
                  )}
                  <h2 className="text-2xl font-extrabold">{post.data.title}</h2>
                  {post.data.description && (
                    <p className="text-muted-foreground">
                      {post.data.description}
                    </p>
                  )}
                  {post.data.date && (
                    <p className="text-sm text-muted-foreground">
                      {formatDate(post.data.date)}
                    </p>
                  )}
                  <a
                    href={"/glli.dev/blogs/example"}
                    className="cursor-pointer absolute inset-0"
                  >
                    <span className="sr-only">View Article</span>
                  </a>
                </article>
              ))}
            </div>
          ) : (
            <p>No posts published.</p>
          )}
        </div>
      </main>
    </div>
  );
}
