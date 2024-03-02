<script lang="ts">
	import gsap from 'gsap';

	import CloseIcon from './icons/close.svelte';
	import MenuIcon from './icons/menu.svelte';

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
			ease: 'expo.inOut',
			duration: 1,
			opacity: 0
		});

		tl.from(node, {
			ease: 'expo.inOut',
			yPercent: -100,
			duration: 1
		});

		const children = document.querySelectorAll('#navigation-list li');
		children.forEach((child) => {
			tlChildren.from(child, {
				ease: 'back.inOut(1.7)',
				duration: 0.25,
				xPercent: -10,
				opacity: 0
			});
		});

		return {
			tick: (t: number) => tl.progress(t),
			duration: 1000
		};
	};

	const tweenOut = (node: gsap.TweenTarget) => {
		let tl = gsap.timeline();

		tl.to('#navigation-wrapper', {
			ease: 'expo.inOut',
			duration: 1,
			opacity: 0
		});

		tl.to(node, {
			ease: 'expo.inOut',
			yPercent: -100,
			duration: 1
		});

		return {
			tick: (t: any, u: number) => tl.progress(u),
			duration: 1000
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
		<a class="group" href="/">
			<h1
				class="font-serif text-lg font-black transition-all duration-300 ease-in-out group-hover:font-normal md:text-3xl"
			>
				Patrick Roelofs
			</h1>
		</a>
		<button
			class="group flex items-center gap-2 text-base md:text-xl"
			id="navigation-open-button"
			on:click={toggleMenu}
		>
			<span
				class="min-w-12 font-bold uppercase transition-all duration-300 ease-in-out group-hover:font-normal"
				>Menu</span
			>
			<MenuIcon class="w-8" />
		</button>

		{#if menuOpen}
			<div
				class="fixed left-0 top-0 z-50 h-screen w-screen overflow-y-auto bg-transparent backdrop-blur-lg"
				id="navigation-wrapper"
			>
				<div class="flex h-full flex-col justify-between" out:tweenOut in:tweenIn>
					<div class="mx-auto flex w-full max-w-7xl justify-end pt-3">
						<button
							class="group flex items-center gap-2 p-4 text-base md:text-xl"
							id="navigation-close-button"
							on:click={toggleMenu}
						>
							<span
								class="min-w-12 font-bold uppercase transition-all duration-300 ease-in-out group-hover:font-normal"
								>Close</span
							>
							<CloseIcon class="relative -left-1 w-8" />
						</button>
					</div>
					<ul
						class="mx-auto mb-16 flex h-full w-full max-w-7xl flex-col justify-center gap-6 px-6 lg:gap-12"
						id="navigation-list"
					>
						{#each items as item, index}
							<li>
								<a class="group flex gap-4" href={item.href}>
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
