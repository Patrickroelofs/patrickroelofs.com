<script lang="ts">
	import gsap from 'gsap';
	import MenuIcon from '$lib/icons/menu.svelte';
	import CloseIcon from '$lib/icons/close.svelte';

	const items = [
		{ name: 'Home', href: '/' },
		{ name: 'Blog', href: '/' },
		{ name: 'About', href: '/' },
		{ name: 'Projects', href: '/' },
		{ name: 'Contact', href: '/' }
	];

	let menuOpen = false;

	const toggleMenu = () => {
		menuOpen = !menuOpen;
		document.body.classList.toggle('overflow-hidden');
	};

	const tweenIn = (node: gsap.TweenTarget) => {
		let tl = gsap.timeline();
		let tlChildren = gsap.timeline({ delay: 0.8 });

		tl.from('#navigation-wrapper', {
			duration: 1,
			opacity: 0,
			ease: 'expo.inOut'
		});

		tl.from(node, {
			duration: 1,
			yPercent: -100,
			ease: 'expo.inOut'
		});

		const children = document.querySelectorAll('#navigation-list li');
		children.forEach((child) => {
			tlChildren.from(child, {
				opacity: 0,
				xPercent: -10,
				ease: 'back.inOut(1.7)',
				duration: 0.25
			});
		});

		return {
			duration: 1000,
			tick: (t: number) => tl.progress(t)
		};
	};

	const tweenOut = (node: gsap.TweenTarget) => {
		let tl = gsap.timeline();

		tl.to('#navigation-wrapper', {
			duration: 1,
			opacity: 0,
			ease: 'expo.inOut'
		});

		tl.to(node, {
			duration: 1,
			yPercent: -100,
			ease: 'expo.inOut'
		});

		return {
			duration: 1000,
			tick: (t: any, u: number) => tl.progress(u)
		};
	};

	const onkeydown = (event: KeyboardEvent) => {
		if (event.key === 'Escape' && menuOpen) {
			toggleMenu();
		}
	};
</script>

<svelte:window on:keydown={onkeydown} />

<nav class="relative top-0 w-full">
	<div class="mx-auto flex max-w-7xl items-center justify-between px-4 py-6">
		<a href="/" class="group">
			<h1
				class="font-serif text-lg font-black transition-all duration-300 ease-in-out group-hover:font-normal md:text-3xl"
			>
				Patrick Roelofs
			</h1>
		</a>
		<button
			id="navigation-open-button"
			on:click={toggleMenu}
			class="group flex items-center gap-2 text-base md:text-xl"
		>
			<span
				class="min-w-12 font-bold uppercase transition-all duration-300 ease-in-out group-hover:font-normal"
				>Menu</span
			>
			<MenuIcon class="w-8" />
		</button>

		{#if menuOpen}
			<div
				id="navigation-wrapper"
				class="fixed left-0 top-0 z-50 h-screen w-screen overflow-y-auto bg-transparent backdrop-blur-lg"
			>
				<div in:tweenIn out:tweenOut class="flex h-full flex-col justify-between">
					<div class="mx-auto flex w-full max-w-7xl justify-end pt-3">
						<button
							id="navigation-close-button"
							on:click={toggleMenu}
							class="group flex items-center gap-2 p-4 text-base md:text-xl"
						>
							<span
								class="min-w-12 font-bold uppercase transition-all duration-300 ease-in-out group-hover:font-normal"
								>Close</span
							>
							<CloseIcon class="relative -left-1 w-8" />
						</button>
					</div>
					<ul
						id="navigation-list"
						class="mx-auto mb-16 flex h-full w-full max-w-7xl flex-col justify-center gap-6 px-6 lg:gap-12"
					>
						{#each items as item, index}
							<li>
								<a href={item.href} class="group flex gap-4">
									<span class="text-lg">{index + 1}</span>
									<span
										class="relative font-serif text-4xl font-black transition-all duration-300 ease-in-out group-hover:font-light lg:text-8xl"
									>
										{item.name}
									</span>
								</a>
							</li>
						{/each}
					</ul>
				</div>
			</div>
		{/if}
	</div>
</nav>
