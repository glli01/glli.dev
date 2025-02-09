import React from "react";
import { cn, formatDate } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { Icons } from "./Icons";
import "@/styles/mdx.css";

interface PostPageProps {
  post: any[];
  authors: any[];
  children?: React.ReactNode;
}

const PostPage: React.FC<PostPageProps> = ({ post, authors, children }) => {
  post = post.data;
  authors = authors.data;
  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <article className="container relative max-w-3xl py-6 lg:py-10">
      <a
        href="/blogs"
        className={cn(
          buttonVariants({ variant: "ghost" }),
          "absolute left-[-200px] top-14 hidden xl:inline-flex",
        )}
      >
        <Icons.chevronLeft className="mr-2 h-4 w-4" />
        See all posts
      </a>
      <div>
        {post.date && (
          <time
            dateTime={post.date}
            className="block text-sm text-muted-foreground"
          >
            Published on {formatDate(post.date)}
          </time>
        )}
        <h1 className="mt-2 inline-block font-heading text-4xl leading-tight lg:text-5xl">
          {post.title}
        </h1>
        {authors?.length ? (
          <div className="mt-4 flex space-x-4">
            {authors.map((author) =>
              author ? (
                <a
                  key={author._id}
                  href={`https://twitter.com/${author.twitter}`}
                  className="flex items-center space-x-2 text-sm"
                >
                  <img
                    src={author.avatar}
                    alt={author.title}
                    width={42}
                    height={42}
                    className="rounded-full bg-white"
                  />
                  <div className="flex-1 text-left leading-tight">
                    <p className="font-medium">{author.title}</p>
                    <p className="text-[12px] text-muted-foreground">
                      @{author.twitter}
                    </p>
                  </div>
                </a>
              ) : null,
            )}
          </div>
        ) : null}
      </div>
      {post.image && (
        <img
          src={post.image}
          alt={post.title}
          width={720}
          height={405}
          className="my-8 rounded-md border bg-muted transition-colors"
          priority
        />
      )}
      <div className="mdx">{children}</div>
      <hr className="mt-12" />
      <div className="flex justify-center py-6 lg:py-10">
        <a href="/blog" className={cn(buttonVariants({ variant: "ghost" }))}>
          <Icons.chevronLeft className="mr-2 h-4 w-4" />
          See all posts
        </a>
      </div>
    </article>
  );
};

export default PostPage;
