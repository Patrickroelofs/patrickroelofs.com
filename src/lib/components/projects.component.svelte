<script lang="ts">
	import Squiggly from '$lib/icons/squiggly.icon.svelte';

	const items = [
		{
			title: 'Project 1',
			description: 'This is a description of project 1.'
		},
		{
			title: 'Project 2',
			description: 'This is a description of project 2.'
		},
		{
			title: 'Project 3',
			description: 'This is a description of project 3.'
		}
	];
</script>

<section class="mx-auto my-36 max-w-screen-lg flex flex-col gap-12">
	<h2 class="flex font-serif text-6xl font-bold items-center w-full justify-between">
    <span>Blog</span>
    <Squiggly class="w-36 h-10" />
  </h2>
	<ul>
		{#each items as item}
			<li>
				<a href="#" class="flex justify-between px-4 py-6">
					<p>{item.title}</p>
					<span>{item.description}</span>
				</a>
			</li>
		{/each}
	</ul>
</section>
