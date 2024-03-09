<script lang="ts">
	import type { Post } from '$lib/functions/getAllBlogPosts';

	export let data: Post;
	console.log(data);
</script>

<main class="px-4">
	<div class="mx-auto mt-12 max-w-7xl">
		<img
			src={data.meta.thumbnail}
			alt=""
			class="h-[45vh] w-full rounded-xl object-cover object-center"
		/>
		<h2 class="my-12 text-pretty font-serif text-title-clamp font-bold">
			{data.meta.title}
		</h2>
	</div>

	<div class="prose mx-auto mt-12 max-w-4xl">
		<svelte:component this={data.content} />
	</div>
</main>
