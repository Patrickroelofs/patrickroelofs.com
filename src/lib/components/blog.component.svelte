<script lang="ts">
	import IoIosArrowRoundForward from 'svelte-icons/io/IoIosArrowRoundForward.svelte';

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
			<li>
				<a
					href="#"
					class="group flex items-center justify-between rounded-xl py-6 transition-all duration-300 ease-in-out hover:bg-hermes-200"
				>
					<p class="text-6xl font-bold transition-all duration-300 ease-in-out group-hover:pl-4">
						0{index + 1}
					</p>
					<p class="w-1/3 text-2xl">{item.title}</p>
					<span
						class="flex w-1/3 justify-end transition-all duration-300 ease-in-out group-hover:pr-4"
					>
						<div class="w-16">
							<IoIosArrowRoundForward />
						</div>
					</span>
				</a>
			</li>
		{/each}
	</ul>
</div>
