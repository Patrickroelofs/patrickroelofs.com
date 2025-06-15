"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import styles from "./hero.module.css";
import image from "@/images/000008510008.jpg";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Hero() {
	const imageRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (!imageRef.current) return;

		gsap.fromTo(
			imageRef.current,
			{ scale: 1, y: 0 },
			{
				scale: 1.2,
				y: -40,
				scrollTrigger: {
					trigger: imageRef.current,
					start: "top center",
					end: "bottom top",
					scrub: true,
				},
				ease: "none",
			},
		);
	}, []);

	return (
		<section className={styles.hero}>
			<div className={styles.content}>
				<h2 className={styles.title}>
					A front-end developer with a passion for creating.
				</h2>
				<p className={styles.description}>
					A dedicated developer, trusted advisor, and passionate front-end
					specialist focused on creating accessible, high-performing, and
					user-friendly web experiences.
				</p>
			</div>
			<div className={styles.image} ref={imageRef}>
				<Image alt="" src={image} fill />
			</div>
		</section>
	);
}

export default Hero;
