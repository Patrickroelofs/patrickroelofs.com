import type { Metadata } from "next";

const defaultOpenGraph: Metadata["openGraph"] = {
  type: "website",
  // TODO: Add defaults
};

function mergeOpenGraph(og?: Metadata["openGraph"]): Metadata["openGraph"] {
  return {
    ...defaultOpenGraph,
    ...og,
    images: og?.images ? og.images : defaultOpenGraph?.images,
  };
}

export { mergeOpenGraph };
