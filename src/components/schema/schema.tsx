import type { Blog, Media } from "@/payload-types";
import { getServersideURL } from "@/util/getServersideURL";

function articleSchema(props: Blog) {
  const image = props.meta?.image as Media;

  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: props.title,
    datePublished: new Date(props.createdAt),
    dateModified: new Date(props.updatedAt),
    image: getServersideURL() + image?.url,
    author: {
      "@type": "Person",
      name: "Patrick Roelofs",
    },
  };
}

function imageSchema(props: Media) {
  return {
    "@context": "https://schema.org",
    "@type": "ImageObject",
    contentUrl: getServersideURL() + props.url,
  };
}

export { articleSchema, imageSchema };
