import { getSingleBlogPost } from "$lib/sanity";
import { error } from "@sveltejs/kit";

export const load = (async ({ params }) => {
  const post = await getSingleBlogPost(params.slug);

  if (post) return {
    ...post[0],
  }

  throw error(404, "Post not found");
});