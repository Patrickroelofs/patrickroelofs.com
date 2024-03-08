<script lang="ts">
	import Blogitem from './blogitem.svelte';
</script>

<div class="mx-auto mb-[25vh] px-4">
	<div
		class="mx-auto flex max-w-screen-2xl flex-col justify-between gap-8 md:flex-row md:items-center"
	>
		<h2 class="mb-4 font-serif text-5xl font-bold md:text-8xl">Blog</h2>
		<div class="flex w-full">
			<span class="relative h-1 w-full rounded-full bg-black">
				<svg
					class="absolute -right-4 -top-[22px] hidden md:block"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					width="48px"
					fill="none"
				>
					<path
						d="M9.71069 18.2929C10.1012 18.6834 10.7344 18.6834 11.1249 18.2929L16.0123 13.4006C16.7927 12.6195 16.7924 11.3537 16.0117 10.5729L11.1213 5.68254C10.7308 5.29202 10.0976 5.29202 9.70708 5.68254C9.31655 6.07307 9.31655 6.70623 9.70708 7.09676L13.8927 11.2824C14.2833 11.6729 14.2833 12.3061 13.8927 12.6966L9.71069 16.8787C9.32016 17.2692 9.32016 17.9023 9.71069 18.2929Z"
						fill="#0F0F0F"
					/>
				</svg>
			</span>
		</div>
		<p class="max-w-xl text-pretty text-2xl leading-normal">
			Welcome to my corner of the internet! Here, I share my thoughts and experiences on topics I
			care about!
		</p>
	</div>

	<ul class="mx-0 mt-12 flex flex-col gap-8 md:mx-16">
		{#each data.posts as item, index}
			<Blogitem {index} {item} />
		{/each}
	</ul>
</div>
