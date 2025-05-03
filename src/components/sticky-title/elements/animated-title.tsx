"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "../sticky-title.module.css";

gsap.registerPlugin(ScrollTrigger);

function AnimatedTitle({ children }: { children: React.ReactNode }) {
	const containerRef = useRef<HTMLDivElement>(null);
	const textRef = useRef<HTMLHeadingElement>(null);

	useEffect(() => {
		if (!containerRef.current || !textRef.current) return;

		gsap.set(textRef.current, {
			opacity: 0,
			x: -60,
		});

		const tl = gsap.timeline({
			scrollTrigger: {
				markers: process.env.NODE_ENV === "development",
				trigger: containerRef.current,
				start: "top top",
				end: "+=420px top",
				scrub: true,
			},
		});

		tl.to(textRef.current, {
			opacity: 1,
			x: 0,
			duration: 0.8,
			ease: "power2.out",
		});

		return () => {
			if (tl.scrollTrigger) {
				tl.scrollTrigger.kill();
			}
		};
	}, []);

	return (
		<div ref={containerRef}>
			<h2 className={styles.title} ref={textRef}>
				{children}
			</h2>
		</div>
	);
}

export { AnimatedTitle };
