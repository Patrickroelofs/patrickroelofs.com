<script lang="ts">
	import type { Post } from '$lib/functions/getAllBlogPosts';
	import Blog from '../lib/components/blog.svelte';
	import Hero from '../lib/components/hero.svelte';

	export let data: { posts: Post[] };
</script>

<Hero />
<Blog {data} />
