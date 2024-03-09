<script lang="ts">
	import type { BlogPostType } from '$lib/functions/retrieveBlogPosts';
	import Blog from '../lib/components/blog.svelte';
	import Hero from '../lib/components/hero.svelte';

	export let data: { posts: BlogPostType[] };
</script>

<Hero />
<Blog {data} />
