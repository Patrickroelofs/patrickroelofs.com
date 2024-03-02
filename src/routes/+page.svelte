<script lang="ts">
	import Hero from '../components/hero.svelte';
	import Blog from '../components/blog.svelte';
	import type { AllBlogPosts } from '$lib/types';

	export let data: AllBlogPosts;
</script>

<Hero />
<Blog {data} />
