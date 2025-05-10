"use client";

import type { HeroBlockType, Media } from "@/payload-types";
import { Image } from "@/components/image";
import styles from "./hero.module.css";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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
		<header className={styles.hero}>
			<div className={styles.container}>
				<p className={styles.title}>{props.title}</p>
				<p className={styles.subtitle}>{props.subtitle}</p>
			</div>

			<div className={styles.wrapper} ref={imageWrapperRef}>
				<Image media={image} className={styles.image} fill />
			</div>
		</header>
	);
}

export { Hero };
