<script lang="ts">
	import Project from './project.component.svelte';

	const items = [
		{
			title: 'Blog Post 1',
			description: 'This is a description of blog post 1.'
		},
		{
			title: 'Blog Post 2',
			description: 'This is a description of blog post 2.'
		},
		{
			title: 'Blog Post 3',
			description: 'This is a description of blog post 3.'
		}
	];
</script>

<section class="mx-auto my-36 flex max-w-screen-2xl flex-col gap-12">
	<h2 class="flex w-full items-center justify-between font-serif text-6xl font-bold">
		<span>Blog</span>
	</h2>
	<ul>
		{#each items as item}
			<Project title={item.title} />
		{/each}
	</ul>
</section>
