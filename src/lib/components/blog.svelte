<script lang="ts">
	import Blogitem from './blogitem.svelte';

	const items = [
		{
			title: 'First blog post',
			description: 'This is the first blog post.'
		},
		{
			title: 'Second blog post',
			description: 'This is the second blog post.'
		}
	];
</script>

<div class="mx-auto max-w-7xl">
	<ul>
		{#each items as item, index}
			<Blogitem {item} {index} />
		{/each}
	</ul>
</div>
