import { payload } from "@/util/getPayloadConfig";
import { getServersideURL } from "@/util/getServersideURL";
import type { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const url = getServersideURL();

  const pages = await payload.find({
    collection: "pages",
    limit: 0,
    where: {},
  });

  const blog = await payload.find({
    collection: "blog",
    limit: 0,
    where: {},
  });

  return [
    ...pages.docs.map(({ slug, updatedAt }) => ({
      url: `${url}/${slug === "home" ? "" : slug}`,
      lastModified: new Date(updatedAt),
    })),
    ...blog.docs.map(({ slug, updatedAt }) => ({
      url: `${url}/blog/${slug}`,
      lastModified: new Date(updatedAt),
    })),
  ];
}
