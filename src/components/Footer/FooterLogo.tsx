"use client";

import { gsap } from "gsap";
import Image from "next/image";
import { useEffect, useRef } from "react";
import ProfileImage from "@/images/profile.jpg";
import styles from "./footer.module.css";

function FooterLogo() {
	const containerRef = useRef<HTMLDivElement>(null);
	const imageRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const container = containerRef.current;
		const image = imageRef.current;

		if (!container || !image) return;

		const letters = container.querySelectorAll(`.letters`);

		const createFloatingAnimation = () => {
			letters.forEach((letter, index) => {
				gsap.set(letter, { y: 0 });
				gsap.to(letter, {
					y: -16,
					duration: 2 + index * 0.1,
					ease: "sine.inOut",
					repeat: -1,
					yoyo: true,
					delay: index * 0.1,
				});
			});
		};

		const createWaveEffect = () => {
			letters.forEach((letter, index) => {
				const randomSign = Math.random() < 0.5 ? -1 : 1;
				const randomRotation = randomSign * (5 + Math.random() * 5);

				gsap.to(letter, {
					rotation: randomRotation,
					scale: 1 + Math.random() * 0.25,
					fontWeight: 400 + Math.floor(Math.random() * 300),
					duration: 0.6,
					ease: "back.out(1.7)",
					delay: index * 0.05,
				});
			});
		};

		const resetWaveEffect = () => {
			gsap.to(letters, {
				y: 0,
				rotation: 0,
				scale: 1,
				duration: 0.8,
				ease: "elastic.out(1, 0.5)",
				fontWeight: 700,
				stagger: 0.03,
			});
		};

		gsap.to(image, {
			y: -20,
			rotation: 6,
			duration: 3,
			ease: "sine.inOut",
			repeat: -1,
			yoyo: true,
		});

		createFloatingAnimation();

		container.addEventListener("mouseenter", createWaveEffect);
		container.addEventListener("mouseleave", resetWaveEffect);

		return () => {
			container.removeEventListener("mouseenter", createWaveEffect);
			container.removeEventListener("mouseleave", resetWaveEffect);
		};
	}, []);

	const renderLetters = (word: string) => {
		return word.split("").map((letter, index) => (
			<span
				// biome-ignore lint/suspicious/noArrayIndexKey: allow index as key for simplicity
				key={index}
				className="letters inline-block transform duration-100 ease-cubic font-bold"
			>
				{letter}
			</span>
		));
	};

	return (
		<div>
			<div
				className="flex justify-center items-center w-full relative cursor-pointer transition-all duration-300 ease-cubic flex-wrap"
				ref={containerRef}
			>
				<span className="text-[clamp(2rem,8vw,6rem)]">{renderLetters("PATRICK")}</span>
				<div
					className="shrink-0 flex justify-center items-center z-10 relative transform"
					ref={imageRef}
				>
					<Image
						src={ProfileImage}
						alt=""
						width={256}
						height={256}
						className="rounded-full object-cover w-[clamp(128px,12vw,160px)] h-[clamp(128px,12vw,160px)]"
					/>
				</div>
				<span className="text-[clamp(2rem,8vw,6rem)]">{renderLetters("ROELOFS")}</span>
			</div>
		</div>
	);
}

export { FooterLogo };
