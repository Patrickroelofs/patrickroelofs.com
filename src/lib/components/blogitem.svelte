<script lang="ts">
	import type { Post } from '$lib/functions/getAllBlogPosts';
	import gsap from 'gsap';

	export let item: Post;
	export let index: number;

	const MouseOver = (event: MouseEvent) => {
		const tl = gsap.timeline();
		const target = event.currentTarget as HTMLElement;
		const img = target.querySelector('img');

		tl.to(img, {
			ease: 'power1.inOut',
			duration: 0.5,
			opacity: 1,
			scale: 1.2
		});
	};

	const MouseLeave = (event: MouseEvent) => {
		const tl = gsap.timeline();
		const target = event.currentTarget as HTMLElement;
		const img = target.querySelector('img');

		tl.to(img, {
			ease: 'power1.inOut',
			duration: 0.5,
			opacity: 0,
			scale: 1
		});
	};

	const Focus = (event: FocusEvent) => {
		const tl = gsap.timeline();
		const target = event.currentTarget as HTMLElement;
		const img = target.querySelector('img');

		tl.to(img, {
			ease: 'power1.inOut',
			duration: 0.5,
			opacity: 1,
			scale: 1.2
		});
	};

	const FocusOut = (event: FocusEvent) => {
		const tl = gsap.timeline();
		const target = event.currentTarget as HTMLElement;
		const img = target.querySelector('img');

		tl.to(img, {
			ease: 'power1.inOut',
			duration: 0.5,
			opacity: 0,
			scale: 1
		});
	};
</script>

<li>
	<a
		class="group relative flex items-center justify-between border-b-2 border-black py-6 transition-all duration-300 ease-in-out"
		href={`/blog/${item.meta.slug}`}
		on:mouseleave={MouseLeave}
		on:mouseover={MouseOver}
		on:focusout={FocusOut}
		on:focus={Focus}
	>
		<div class="flex gap-16">
			<p
				class="text-4xl font-bold transition-all duration-300 ease-in-out group-hover:pl-4 md:text-8xl"
			>
				0{index + 1}
			</p>
			<div class="flex w-full max-w-xl flex-col gap-4">
				<p class="mr-4 text-xl font-medium md:text-3xl">{item.meta.title}</p>
				<p
					class="line-clamp-3 text-ellipsis leading-normal opacity-40 transition-all duration-300 ease-in-out group-hover:opacity-100"
				>
					{item.meta.description}
				</p>
			</div>
		</div>
		<img
			class="pointer-events-none absolute right-64 hidden h-[236px] w-[420px] rounded-lg object-cover object-center opacity-0 shadow-2xl 2xl:block"
			src={item.meta.thumbnail}
			aria-hidden="true"
			alt=""
		/>
		<span class="flex w-1/3 justify-end transition-all duration-300 ease-in-out group-hover:pr-4">
			<div class="w-8 md:w-16">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
					<path
						d="M4 12H20M20 12L16 8M20 12L16 16"
						stroke-linejoin="round"
						stroke-linecap="round"
						stroke="#000000"
						stroke-width="2"
					/>
				</svg>
			</div>
		</span>
	</a>
</li>
