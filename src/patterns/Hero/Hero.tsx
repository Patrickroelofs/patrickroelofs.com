"use client";

import { Image } from "@/components/Image";
import type { HeroBlockType, Media } from "@/payload-types";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

function Hero(props: HeroBlockType) {
	const { image } = props as {
		image: Media;
	};

	const imageWrapperRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const tl = gsap.timeline({
			scrollTrigger: {
				markers: process.env.NODE_ENV === "development",
				trigger: "body",
				start: "top top",
				end: "+=480px top",
				scrub: true,
			},
		});

		if (imageWrapperRef.current) {
			tl.to(imageWrapperRef.current, {
				scale: 1,
				y: "-5%",
				ease: "sine.inOut",
				duration: 0.75,
			});
		}

		return () => {
			tl.kill();
		};
	}, []);

	return (
		<header className="mt-28 flex flex-col gap-6">
			<div className="mx-auto flex max-w-6xl flex-col gap-6">
				<h2 className="text-pretty font-bold text-7xl leading-snug">
					{props.title}
				</h2>
				<p className="m-0 text-pretty text-2xl leading-normal md:ml-24">
					{props.subtitle}
				</p>
			</div>

			<div
				ref={imageWrapperRef}
				className="relative mx-auto h-[20dvh] min-h-[580px] w-full max-w-7xl translate-y-0 scale-95 transform"
			>
				<Image
					media={image}
					className="rounded-3xl object-cover object-center"
					fill
				/>
			</div>
		</header>
	);
}

export { Hero };
