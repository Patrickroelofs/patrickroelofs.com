import {
	GithubLogoIcon,
	LinkedinLogoIcon,
	MailboxIcon,
} from "@phosphor-icons/react/ssr";
import { gsap } from "gsap";
import { useEffect, useRef, useState } from "react";

function Footer() {
	const email = "contact@patrickroelofs.com";
	const socialLinks = [
		{
			ariaLabel: "Email",
			href: `mailto:${email}`,
			icon: <MailboxIcon size={32} weight="duotone" />,
		},
		{
			ariaLabel: "Github",
			href: "https://github.com/patrickroelofs",
			icon: <GithubLogoIcon size={32} weight="duotone" />,
		},
		{
			ariaLabel: "LinkedIn",
			href: "https://www.linkedin.com/in/patrickroelofs",
			icon: <LinkedinLogoIcon size={32} weight="duotone" />,
		},
	] as const;

	const [isCopied, setIsCopied] = useState(false);
	const [copyMessage, setCopyMessage] = useState("Click to copy email");
	const cursorRef = useRef<HTMLDivElement>(null);
	const cursorTextRef = useRef<HTMLSpanElement>(null);
	const emailButtonRef = useRef<HTMLButtonElement>(null);
	const containerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const cursor = cursorRef.current;
		const cursorText = cursorTextRef.current;
		const emailButton = emailButtonRef.current;
		const hasFinePointer = window.matchMedia("(pointer: fine)").matches;

		if (!hasFinePointer) {
			return;
		}

		if (!(cursor && cursorText && emailButton)) {
			return;
		}

		const moveCursorToPointer = gsap.quickTo(cursor, "x", {
			duration: 0.12,
			ease: "power2.out",
		});
		const moveCursorToPointerY = gsap.quickTo(cursor, "y", {
			duration: 0.12,
			ease: "power2.out",
		});

		const handleMouseMove = (e: MouseEvent) => {
			moveCursorToPointer(e.clientX);
			moveCursorToPointerY(e.clientY);
		};

		const handleEmailEnter = () => {
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

		const handleEmailLeave = () => {
			gsap.to(cursor, {
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
					setCopyMessage("Click to copy email");
				});
		};

		document.addEventListener("mousemove", handleMouseMove);
		emailButton.addEventListener("mouseenter", handleEmailEnter);
		emailButton.addEventListener("mouseleave", handleEmailLeave);

		return () => {
			document.removeEventListener("mousemove", handleMouseMove);
			emailButton.removeEventListener("mouseenter", handleEmailEnter);
			emailButton.removeEventListener("mouseleave", handleEmailLeave);
			gsap.killTweensOf([cursor, cursorText]);
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
			gsap.killTweensOf(letters);
		};
	}, []);

	useEffect(() => {
		if (!isCopied) {
			return;
		}

		const timeout = window.setTimeout(() => {
			setIsCopied(false);
			setCopyMessage("Click to copy email");
		}, 1800);

		return () => {
			window.clearTimeout(timeout);
		};
	}, [isCopied]);

	const copyEmailToClipboard = async () => {
		const clipboard = navigator.clipboard;

		if (!window.isSecureContext || typeof clipboard?.writeText !== "function") {
			setCopyMessage("Clipboard unavailable");
			return;
		}

		try {
			await clipboard.writeText(email);
			setIsCopied(true);
			setCopyMessage("Copied!");
		} catch {
			setCopyMessage("Failed to copy");
		}
	};

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
				onClick={copyEmailToClipboard}
				ref={emailButtonRef}
				type="button"
			>
				<div
					className="pointer-events-none fixed top-0 left-0 z-50 flex rounded-full bg-black/30 p-2xs opacity-0 backdrop-blur-lg"
					ref={cursorRef}
				>
					<span className="font-bold text-ginger text-xs" ref={cursorTextRef}>
						{copyMessage}
					</span>
				</div>
				<div>
					<div
						className="relative flex w-full cursor-pointer flex-wrap items-center justify-center transition-all duration-300 ease-cubic text-black"
						ref={containerRef}
					>
						<span className="text-[clamp(2rem,8vw,6rem)]">
							{renderLetters("PATRICK")}
						</span>
						<span className="text-[clamp(2rem,8vw,6rem)]">
							{renderLetters("ROELOFS")}
						</span>
					</div>
				</div>
			</button>

			<div className="flex items-center justify-between border-t border-t-dark-grey pt-s">
				<p className="text-xs">Developed with ❤️ by Patrick Roelofs.</p>
				<div className="flex flex-wrap justify-center gap-s">
					{socialLinks.map((socialLink) => (
						<a
							aria-label={socialLink.ariaLabel}
							className="flex h-10 w-10 items-center justify-center rounded-full bg-transparent transition-all duration-300 ease-cubic hover:-translate-y-0.5 hover:bg-black hover:text-ginger focus-visible:-translate-y-0.5 focus-visible:bg-black focus-visible:text-ginger"
							href={socialLink.href}
							key={socialLink.ariaLabel}
							rel="noopener noreferrer"
							target="_blank"
						>
							{socialLink.icon}
						</a>
					))}
				</div>
			</div>
		</footer>
	);
}

export default Footer;
