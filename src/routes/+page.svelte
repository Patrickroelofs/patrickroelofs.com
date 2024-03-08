<script lang="ts">
	import type { BlogPostType } from '$lib/retrieveBlogPosts';
	import Blog from '../components/blog.svelte';
	import Hero from '../components/hero.svelte';

	export let data: { posts: BlogPostType[] };
</script>

<Hero />
<Blog {data} />
