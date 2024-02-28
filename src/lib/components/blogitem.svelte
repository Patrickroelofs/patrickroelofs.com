<script lang="ts">
	import gsap from 'gsap';

	export let item: any;
	export let index: number;

	const MouseOver = (event: any) => {
		const tl = gsap.timeline();
		const img = event.target.querySelector('img');

		tl.set(img, { visibility: 'visible' });
		tl.to(img, {
			opacity: 1,
			scale: 1.2
		});
	};

	const MouseLeave = (event: any) => {
		const tl = gsap.timeline();
		const img = event.target.querySelector('img');

		tl.to(img, { opacity: 0, scale: 1 });
		tl.set(img, { visibility: 'hidden' });
	};
</script>

<li>
	<a
		on:mouseover={MouseOver}
		on:mouseleave={MouseLeave}
		on:focus={MouseOver}
		on:focusout={MouseLeave}
		href="#"
		class="group relative flex items-center justify-between rounded-xl py-6 transition-all duration-300 ease-in-out hover:bg-hermes-200"
	>
		<p class="text-6xl font-bold transition-all duration-300 ease-in-out group-hover:pl-4">
			0{index + 1}
		</p>
		<p class="w-1/3 text-2xl">{item.title}</p>
		<img
			src="https://placekitten.com/256/144"
			alt="Kitten"
			class="pointer-events-none invisible absolute right-1/4 h-36 w-64 rounded-lg object-cover object-center opacity-0 shadow-2xl"
		/>
		<span class="flex w-1/3 justify-end transition-all duration-300 ease-in-out group-hover:pr-4">
			<div class="w-16">
				<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path
						d="M4 12H20M20 12L16 8M20 12L16 16"
						stroke="#000000"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
				</svg>
			</div>
		</span>
	</a>
</li>
