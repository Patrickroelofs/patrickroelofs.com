"use client";

import type { ScrollingTextType } from "@/payload-types";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./scrolling-text.module.css";
import { cva } from "class-variance-authority";
import { bottomSpacingStyles, topSpacingStyles } from "@/util/fieldMaps";

gsap.registerPlugin(ScrollTrigger);

const scrollingTextStyles = cva(styles.container, {
	variants: {
		topSpacing: topSpacingStyles,
		bottomSpacing: bottomSpacingStyles,
	},
});

const ScrollingText = (props: ScrollingTextType) => {
	const { text } = props;
	const containerRef = useRef<HTMLDivElement>(null);
	const charsRef = useRef<HTMLSpanElement[]>([]);

	useEffect(() => {
		const chars = text.split("");

		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: containerRef.current,
				start: "-=240px center",
				end: "bottom center",
				scrub: 0.5,
				markers: process.env.NODE_ENV === "development",
			},
		});

		charsRef.current.forEach((char, index) => {
			const delay = index * 0.05;

			tl.from(
				char,
				{
					opacity: 0.1,
					duration: 0.5,
					ease: "power2.inOut",
				},
				delay,
			);

			tl.to(
				char,
				{
					opacity: 1,
					duration: 0.5,
					ease: "power2.inOut",
				},
				delay + 0.5,
			);
		});

		return () => {
			tl.kill();
		};
	}, [text]);

	return (
		<div
			ref={containerRef}
			className={scrollingTextStyles({
				topSpacing: props.topSpacing,
				bottomSpacing: props.bottomSpacing,
			})}
		>
			{text.split(" ").map((word, index) => (
				<span
					// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
					key={index}
					ref={(el) => {
						if (el) charsRef.current[index] = el;
					}}
				>
					{word}
					{index < text.split(" ").length - 1 && "\u00A0"}
				</span>
			))}
		</div>
	);
};

export { ScrollingText };
