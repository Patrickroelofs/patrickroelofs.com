import { GithubLogoIcon, LinkedinLogoIcon, MailboxIcon } from "@phosphor-icons/react/ssr";
import { Link } from "@tanstack/react-router";
import { gsap } from "gsap";
import { useEffect, useRef, useState } from "react";

function Footer() {
	const email = "contact@patrickroelofs.com";

	const [isCopied, setIsCopied] = useState(false);
	const cursorRef = useRef<HTMLDivElement>(null);
	const cursorTextRef = useRef<HTMLSpanElement>(null);
	const footerRef = useRef<HTMLButtonElement>(null);
	const containerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const cursor = cursorRef.current;
		const cursorText = cursorTextRef.current;
		const footer = footerRef.current;

		if (!(cursor && cursorText && footer)) {
			return;
		}

		const handleMouseMove = (e: MouseEvent) => {
			gsap.to(cursor, {
				x: e.clientX,
				y: e.clientY,
				duration: 0.1,
				ease: "power2.out",
			});
		};

		const handleFooterEnter = () => {
			gsap.to(cursor, {
				opacity: 1,
				duration: 0.3,
				ease: "power2.out",
			});
			gsap.to(cursorText, {
				opacity: 1,
				duration: 0.3,
				ease: "power2.out",
			});
		};

		const handleFooterLeave = () => {
			gsap.to(cursor, {
				scale: 1,
				duration: 0.3,
				ease: "power2.out",
				opacity: 0,
			});
			gsap
				.to(cursorText, {
					opacity: 0,
					duration: 0.3,
					ease: "power2.out",
				})
				.then(() => {
					setIsCopied(false);
				});
		};

		document.addEventListener("mousemove", handleMouseMove);
		footer.addEventListener("mouseenter", handleFooterEnter);
		footer.addEventListener("mouseleave", handleFooterLeave);

		return () => {
			document.removeEventListener("mousemove", handleMouseMove);
			footer.removeEventListener("mouseenter", handleFooterEnter);
			footer.removeEventListener("mouseleave", handleFooterLeave);
		};
	}, []);

	useEffect(() => {
		const container = containerRef.current;

		if (!container) {
			return;
		}

		const letters = container.querySelectorAll(".letters");

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

		createFloatingAnimation();

		container.addEventListener("mouseenter", createWaveEffect);
		container.addEventListener("mouseleave", resetWaveEffect);

		return () => {
			container.removeEventListener("mouseenter", createWaveEffect);
			container.removeEventListener("mouseleave", resetWaveEffect);
		};
	}, []);

	const renderLetters = (word: string) =>
		word.split("").map((letter, index) => (
			<span
				className="letters inline-block transform font-bold duration-100 ease-cubic"
				// biome-ignore lint/suspicious/noArrayIndexKey: Allowed here
				key={index}
			>
				{letter}
			</span>
		));

	return (
		<footer className="mx-auto my-3xl flex max-w-5xl flex-col gap-l px-2">
			<button
				aria-label="Copy email address"
				onClick={async () => {
					try {
						if (
							navigator.clipboard !== null &&
							typeof navigator.clipboard.writeText === "function"
						) {
							await navigator.clipboard.writeText(email);
							setIsCopied(true);
						} else {
							// Fallback for browsers that don't support clipboard API
							console.warn("Clipboard API not available");
						}
					} catch (error) {
						console.error("Failed to copy email to clipboard:", error);
					}
				}}
				ref={footerRef}
				type="button"
			>
				<div
					className="pointer-events-none fixed top-0 left-0 z-50 flex rounded-full bg-black/30 p-2xs opacity-0 backdrop-blur-lg"
					ref={cursorRef}
				>
					<span
						className="font-bold text-ginger text-xs"
						ref={cursorTextRef}
					>
						{isCopied ? "Copied!" : "Click to copy email"}
					</span>
				</div>
				<div>
					<div
						className="relative flex w-full cursor-pointer flex-wrap items-center justify-center transition-all duration-300 ease-cubic"
						ref={containerRef}
					>
						<span className="text-[clamp(2rem,8vw,6rem)]">{renderLetters("PATRICK")}</span>
						<span className="text-[clamp(2rem,8vw,6rem)]">{renderLetters("ROELOFS")}</span>
					</div>
				</div>
			</button>

			<div className="flex items-center justify-between border-t border-t-dark-grey pt-s">
				<p className="text-xs">Developed with ❤️ by Patrick Roelofs.</p>
				<div className="flex flex-wrap justify-center gap-s">
					<Link
						aria-label="Email"
						className="flex h-10 w-10 items-center justify-center rounded-full bg-transparent transition-all duration-300 ease-cubic hover:-translate-y-0.5 hover:bg-black hover:text-ginger focus:-translate-y-0.5 focus:bg-black focus:text-ginger"
						target="_blank"
						to="/"
					>
						<MailboxIcon
							size={32}
							weight="duotone"
						/>
					</Link>
					<Link
						aria-label="Github"
						className="flex h-10 w-10 items-center justify-center rounded-full bg-transparent transition-all duration-300 ease-cubic hover:-translate-y-0.5 hover:bg-black hover:text-ginger focus:-translate-y-0.5 focus:bg-black focus:text-ginger"
						target="_blank"
						to="/"
					>
						<GithubLogoIcon
							size={32}
							weight="duotone"
						/>
					</Link>
					<Link
						aria-label="LinkedIn"
						className="flex h-10 w-10 items-center justify-center rounded-full bg-transparent transition-all duration-300 ease-cubic hover:-translate-y-0.5 hover:bg-black hover:text-ginger focus:-translate-y-0.5 focus:bg-black focus:text-ginger"
						target="_blank"
						to="/"
					>
						<LinkedinLogoIcon
							size={32}
							weight="duotone"
						/>
					</Link>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
