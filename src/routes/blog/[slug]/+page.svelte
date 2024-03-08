<script lang="ts">
	export let data: any;
</script>

<main>
	<div class="prose mt-16 px-4">
		<svelte:component this={data.component} />
	</div>
</main>
