<script lang="ts">
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';

	let image: HTMLImageElement;

	onMount(() => {
		window.addEventListener('mousemove', (e) => {
			const x = (window.innerWidth / 2 - e.clientX) / 90;
			const y = (window.innerHeight / 2 - e.clientY) / 90;

			gsap.to(image, {
				duration: 0.5,
				x: x,
				y: y,
				ease: 'power1.out'
			});
		});
	});
</script>

<header class="relative mx-auto mt-12 flex h-auto max-w-7xl items-center lg:mt-36">
	<div class="flex flex-col gap-8 lg:flex-row">
		<p
			class="z-10 max-w-6xl text-balance px-4 pt-0 text-center font-serif text-3xl leading-normal lg:px-0 lg:pt-32 lg:text-left lg:text-7xl lg:leading-normal"
		>
			A front-end developer with a passion for user experiences.
		</p>
		<div
			class="right-0 mx-auto w-96 overflow-hidden bg-gradient-to-br from-hermes-200 to-hermes-300 lg:absolute lg:h-[512px] lg:w-[512px] lg:rounded-full"
		>
			<img bind:this={image} src="/images/patrick.png" alt="" />
		</div>
	</div>
</header>
