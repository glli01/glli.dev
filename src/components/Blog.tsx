import { compareDesc } from "date-fns";
import { formatDate } from "@/lib/utils";
import React from "react";

export const metadata = {
  title: "Blog",
};
const allPosts = [
  {
    _id: "1",
    published: true,
    date: "2024-01-15",
    title: "Building Scalable Node.js Applications",
    description:
      "Best practices and patterns for building production-ready Node.js applications that can handle growth.",
    image: "https://placehold.co/804x452",
    slug: "/blog/building-scalable-nodejs-applications",
  },
  {
    _id: "2",
    published: true,
    date: "2024-01-02",
    title: "DevOps Best Practices for 2024",
    description:
      "Essential DevOps practices and tools that every team should consider implementing this year.",
    image: "https://placehold.co/804x452",
    slug: "/blog/devops-best-practices-2024",
  },
  {
    _id: "3",
    published: true,
    date: "2023-12-20",
    title: "Microservices vs Monoliths: Making the Right Choice",
    description:
      "A detailed comparison of microservices and monolithic architectures to help you choose the right approach.",
    image: "https://placehold.co/804x452",
    slug: "/blog/microservices-vs-monoliths",
  },
  {
    _id: "4",
    published: true,
    date: "2023-12-10",
    title: "Getting Started with Docker and Kubernetes",
    description:
      "A beginner's guide to containerization and orchestration with Docker and Kubernetes.",
    image: "https://placehold.co/804x452",
    slug: "/blog/docker-kubernetes-guide",
  },
];

export default async function BlogPage() {
  const posts = allPosts
    .filter((post) => post.published)
    .sort((a, b) => {
      return compareDesc(new Date(a.date), new Date(b.date));
    });

  return (
    <div className="flex min-h-screen bg-background flex-col">
      <main className="flex-1">
        <div className="container max-w-4xl py-6 lg:py-10">
          <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
            <div className="flex-1 space-y-4">
              <h1 className="inline-block font-heading text-4xl tracking-tight lg:text-5xl">
                Blog
              </h1>
              <p className="text-xl text-muted-foreground">
                A blog built using Contentlayer. Posts are written in MDX.
              </p>
            </div>
          </div>
          <hr className="my-8" />
          {posts?.length ? (
            <div className="grid gap-10 sm:grid-cols-2">
              {posts.map((post, index) => (
                <article
                  key={post._id}
                  className="group relative flex flex-col space-y-2"
                >
                  {post.image && (
                    <img
                      src={post.image}
                      alt={post.title}
                      width={804}
                      height={452}
                      className="rounded-md border bg-muted transition-colors"
                    />
                  )}
                  <h2 className="text-2xl font-extrabold">{post.title}</h2>
                  {post.description && (
                    <p className="text-muted-foreground">{post.description}</p>
                  )}
                  {post.date && (
                    <p className="text-sm text-muted-foreground">
                      {formatDate(post.date)}
                    </p>
                  )}
                  <a href={post.slug} className="absolute inset-0">
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
