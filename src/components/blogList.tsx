import type { Blog, BlogListType } from "@/payload-types";
import Link from "next/link";
import type { ReactElement } from "react";
import { Icon } from "./icon";

function BlogList(props: BlogListType): ReactElement {
  const { articles } = props.content as {
    articles: {
      article: Blog;
    }[];
  };

  return (
    <div className="divide divide-black divide-y-2 max-w-5xl ml-auto">
      {articles.map((item) => (
        <article key={item.article.id} className="py-4 group">
          <Link
            href={`blog/${item.article.slug}`}
            className="flex items-center justify-between"
          >
            <h2 className="text-2xl font-bold line-clamp-1">
              {item.article.title}
            </h2>
            <Icon
              name="ArrowDownRight"
              size={32}
              className="group-hover:-rotate-45 transition-transform ease-in-out duration-200 flex-none"
            />
          </Link>
        </article>
      ))}
    </div>
  );
}

export { BlogList };
