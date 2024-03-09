<script lang="ts">
	import type { Post } from '$lib/functions/getAllBlogPosts';
	import Blogitem from './blogitem.svelte';

	export let data: { posts: Post[] };
</script>

<div class="mx-auto mb-[25vh] max-w-screen-2xl px-4">
	<div class="mx-auto flex flex-col justify-between gap-8 md:flex-row md:items-center">
		<h2 class="mb-4 font-serif text-5xl font-bold md:text-8xl">Blog</h2>
		<div class="flex w-full">
			<span class="relative h-1 w-full rounded-full bg-black" />
		</div>
	</div>

	<ul class="mt-12 flex flex-col gap-8">
		{#each data.posts as item, index}
			<Blogitem {index} {item} />
		{/each}
	</ul>
</div>
