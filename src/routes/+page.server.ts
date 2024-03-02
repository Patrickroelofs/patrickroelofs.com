import { getAllBlogPosts } from "$lib/sanity";

export async function load() {
  const posts = await getAllBlogPosts();

  return {
    posts,
  }
}