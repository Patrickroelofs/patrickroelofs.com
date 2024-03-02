<script lang="ts">
	import type { AllBlogPosts } from '$lib/types';

	import Hero from '../components/hero.svelte';
	import Blog from '../components/blog.svelte';

	export let data: { posts: AllBlogPosts };
</script>

<Hero />
<Blog {data} />
