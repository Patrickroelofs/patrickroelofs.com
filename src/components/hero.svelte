<script lang="ts">
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';

	let image: HTMLImageElement;

	const moveEvent = (e: MouseEvent) => {
		const x = (window.innerWidth / 2 - e.clientX) / 90;
		const y = (window.innerHeight / 2 - e.clientY) / 90;

		gsap.to(image, {
			ease: 'power1.out',
			duration: 0.5,
			x: x,
			y: y
		});
	};

	onMount(() => {
		window.addEventListener('mousemove', moveEvent);

		return () => {
			window.removeEventListener('mousemove', moveEvent);
		};
	});
</script>

<header
	class="relative mx-auto mb-[25vh] mt-16 flex h-[512px] max-w-7xl items-center justify-center xl:justify-start"
>
	<div class="flex flex-col gap-8 xl:flex-row">
		<p
			class="z-10 max-w-6xl text-balance px-4 pt-0 text-center font-serif text-3xl leading-normal xl:px-0 xl:text-left xl:text-7xl xl:leading-normal"
		>
			A front-end developer with a passion for user experiences.
		</p>
		<div
			class="right-0 top-0 mx-auto w-96 overflow-hidden bg-gradient-to-br from-hermes-200 to-hermes-300 xl:absolute xl:h-[512px] xl:w-[512px] xl:rounded-full"
		>
			<img src="https://images.patrickroelofs.com/patrick.png" bind:this={image} alt="" />
		</div>
	</div>
</header>
