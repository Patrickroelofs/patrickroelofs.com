<script lang="ts">
	import gsap from 'gsap';
	import MenuIcon from '$lib/icons/menu.icon.svelte';
	import CloseIcon from '$lib/icons/close.icon.svelte';

	const items = [
		{ name: 'Home', href: '/' },
		{ name: 'Blog', href: '/' },
		{ name: 'About', href: '/' },
		{ name: 'Projects', href: '/' },
		{ name: 'Contact', href: '/' }
	];

	let menuOpen = false;

	const toggleMenu = () => (menuOpen = !menuOpen);

	const tweenIn = (node: gsap.TweenTarget) => {
		let tl = gsap.timeline();

		tl.from(node, {
			duration: 1,
			opacity: 0,
			yPercent: -100,
			ease: 'power1.out'
		});

		tl.from('#navigation-close-button', {
			opacity: 0,
			duration: 0.5,
			ease: 'power1.out'
		});

		return {
			duration: 1000,
			tick: (t: number) => tl.progress(t)
		};
	};

	const tweenOut = (node: gsap.TweenTarget) => {
		let tl = gsap.timeline();

		tl.to(node, {
			duration: 1,
			opacity: 0,
			yPercent: -100,
			ease: 'power1.out'
		});

		return {
			duration: 1000,
			tick: (t: any, u: number) => tl.progress(u)
		};
	};
</script>

<nav class="mx-auto flex w-full max-w-7xl">
	<button id="navigation-open-button" on:click={toggleMenu} class="flex items-center gap-2 p-4">
		<span class="min-w-12 font-bold uppercase">Menu</span>
		<MenuIcon class="w-8" />
	</button>

	{#if menuOpen}
		<div
			class="fixed left-0 top-0 z-50 flex h-full w-full flex-col bg-hermes-100 lg:bg-transparent lg:backdrop-blur-lg lg:backdrop-grayscale"
			in:tweenIn
			out:tweenOut
		>
			<div class="mx-auto w-full max-w-7xl">
				<button
					id="navigation-close-button"
					on:click={toggleMenu}
					class="flex items-center gap-2 p-4"
				>
					<span class="min-w-12 font-bold uppercase">Close</span>
					<CloseIcon class="relative -left-1 w-8" />
				</button>
			</div>
			<ul
				class="mx-auto mb-24 flex h-full w-full max-w-7xl flex-col justify-center gap-6 px-6 lg:gap-12"
			>
				{#each items as item, index}
					<li>
						<a href={item.href} class="group flex gap-4">
							<span class="text-lg">{index + 1}</span>
							<span
								class="font-serif text-4xl font-black transition-all duration-300 ease-in-out group-hover:font-light lg:text-8xl"
							>
								{item.name}
							</span>
						</a>
					</li>
				{/each}
			</ul>
		</div>
	{/if}
</nav>
