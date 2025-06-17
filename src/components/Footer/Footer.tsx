"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

import styles from "./footer.module.css";
import Link from "next/link";
import Image from "next/image";
import ProfileImage from "@/images/profile.jpg";
import {
	GithubLogoIcon,
	LinkedinLogoIcon,
	MailboxIcon,
} from "@phosphor-icons/react/dist/ssr";

function Footer() {
	const containerRef = useRef<HTMLDivElement>(null);
	const imageRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const container = containerRef.current;
		const image = imageRef.current;

		if (!container || !image) return;

		const letters = container.querySelectorAll(`.${styles.letter}`);

		const createFloatingAnimation = () => {
			letters.forEach((letter, index) => {
				gsap.set(letter, { y: 0 });
				gsap.to(letter, {
					y: -8,
					duration: 2 + index * 0.1,
					ease: "sine.inOut",
					repeat: -1,
					yoyo: true,
					delay: index * 0.1,
				});
			});
		};

		// Wave effect on hover
		const createWaveEffect = () => {
			letters.forEach((letter, index) => {
				gsap.to(letter, {
					y: -20,
					rotation: Math.random() * 10 - 5,
					scale: 1.1,
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
				stagger: 0.03,
			});
		};

		gsap.to(image, {
			y: -10,
			rotation: 2,
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
			// biome-ignore lint/suspicious/noArrayIndexKey: allow index as key for simplicity
			<span key={index} className={styles.letter}>
				{letter}
			</span>
		));
	};

	return (
		<footer className={styles.footer}>
			<div className={styles.heroSection}>
				<div className={styles.container} ref={containerRef}>
					<span className={styles.text}>{renderLetters("PATRICK")}</span>
					<div className={styles.imageContainer} ref={imageRef}>
						<Image
							src={ProfileImage}
							alt=""
							width={256}
							height={256}
							className={styles.image}
						/>
					</div>
					<span className={styles.text}>{renderLetters("ROELOFS")}</span>
				</div>
			</div>

			<div className={styles.socialSection}>
				<div className={styles.links}>
					<Link href="#" className={styles.footerLink}>
						Work
					</Link>
					<Link href="#" className={styles.footerLink}>
						About
					</Link>
					<Link href="#" className={styles.footerLink}>
						Blog
					</Link>
					<Link href="#" className={styles.footerLink}>
						Contact
					</Link>
				</div>
			</div>

			<div className={styles.bottomSection}>
				<p className={styles.copyright}>Developed with ❤️ by Patrick Roelofs.</p>
				<div className={styles.socialIcons}>
					<Link
						href="mailto:contact@patrickroelofs.com"
						className={styles.socialLink}
						aria-label="Email"
						target="_blank"
					>
						<MailboxIcon weight="duotone" size={32} />
					</Link>
					<Link
						href="https://github.com/patrickroelofs"
						className={styles.socialLink}
						aria-label="Github"
						target="_blank"
					>
						<GithubLogoIcon weight="duotone" size={32} />
					</Link>
					<Link
						href="https://www.linkedin.com/in/patrick-roelofs/"
						className={styles.socialLink}
						aria-label="Linkdin"
						target="_blank"
					>
						<LinkedinLogoIcon weight="duotone" size={32} />
					</Link>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
