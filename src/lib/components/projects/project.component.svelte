<script lang="ts">
	import { gsap } from 'gsap';

	export let title: string;

	const mouseEnter = (e: MouseEvent) => {
		e.target?.addEventListener('mousemove', mouseMove as EventListener);
	};

	const mouseMove = (e: MouseEvent) => {
		const img = (e.target as HTMLElement)?.querySelector('img');
		const rect = (e.target as HTMLElement)?.getBoundingClientRect();

		if (!img || !rect)
			return console.error('No image found, something went wrong hovering on item.');

		const x = e.clientX - rect.left - img.offsetWidth / 2;
		const y = e.clientY - rect.top - img.offsetHeight / 2;

		gsap.to(img, {
			x: x,
			y: y,
			scale: 1,
			opacity: 1,
			visibility: 'visible',
			duration: 0.5,
			ease: 'power1'
		});
	};

	const mouseLeave = (e: MouseEvent) => {
		const img = (e.target as HTMLElement).querySelector('img');

		gsap.to(img, {
			scale: 0,
			opacity: 0,
			duration: 0.5
		});
	};
</script>

<li>
	<a
		href="#"
		class="relative flex items-center justify-between border-b-2 border-black px-4 py-6"
		on:mouseenter={mouseEnter}
		on:mouseleave={mouseLeave}
	>
		<span class="font-serif text-2xl font-medium">{title}</span>
		<img
			src="https://placekitten.com/300/200"
			alt=""
			class="pointer-events-none invisible absolute left-0 top-0 z-10 h-64 w-96 scale-0 rounded-lg object-cover opacity-0"
		/>
	</a>
</li>
