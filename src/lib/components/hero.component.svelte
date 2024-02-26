<script lang="ts">
	import gsap from 'gsap';
	import { onMount } from 'svelte';

	let image: gsap.TweenTarget;

	onMount(() => {
		window.addEventListener('mousemove', (e) => {
			const x = (window.innerWidth / 2 - e.clientX) / 95;
			const y = (window.innerHeight / 2 - e.clientY) / 95;

			gsap.to(image, {
				duration: 0.5,
				x: x,
				y: y,
				ease: 'power1.out'
			});
		});
	});
</script>

<header class="mx-auto mt-12 flex max-w-screen-xl items-center justify-center lg:mt-36">
	<div class="relative flex w-full flex-col items-center gap-8 lg:flex-row">
		<p
			class="relative left-0 z-10 max-w-6xl text-balance px-4 pt-0 text-center font-serif text-3xl leading-normal lg:px-0 lg:text-left lg:text-7xl lg:leading-normal"
		>
			A front-end developer with a passion for user experiences.
		</p>
		<div
			class="right-0 inline-block h-[512px] max-w-[512px] overflow-hidden rounded-none bg-gradient-to-br from-hermes-200 to-hermes-300 lg:absolute lg:rounded-full"
		>
			<img bind:this={image} src="images/patrick.png" alt="" />
		</div>
	</div>
</header>
