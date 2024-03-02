import { createClient } from "@sanity/client";
import { env } from "$env/dynamic/private";

import type { AllBlogPosts } from "./types";

function sanityClient() {
  const config = {
    projectId: env.SANITY_PROJECT_ID,
    dataset: env.SANITY_DATASET,
    apiVersion: '2024-02-06',
  };

  return createClient(config);
}

export const getAllBlogPosts = async (): Promise<AllBlogPosts> => {
  const client = sanityClient();
  
  const query = `*[_type == "Blog"] | order(publishedAt desc) {
    title,
    description,
    slug
  }`;

  return await client.fetch(query);
}