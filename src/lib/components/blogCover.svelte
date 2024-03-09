<script lang="ts">
	export let title: string;
	export let image: string;
</script>

<div class="mx-auto max-w-7xl px-4">
	<h1 class="text-pretty font-serif text-title-clamp font-bold">{title}</h1>
	<img class="w-full rounded-md shadow-2xl" src={image} alt="" />
</div>
