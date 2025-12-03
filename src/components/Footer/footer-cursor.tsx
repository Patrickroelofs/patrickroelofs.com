"use client";

import { gsap } from "gsap";
import { type ReactNode, useEffect, useRef, useState } from "react";

function FooterCursor({ children }: { children?: ReactNode }) {
	const email = "contact@patrickroelofs.com";

	const [isCopied, setIsCopied] = useState(false);
	const cursorRef = useRef<HTMLDivElement>(null);
	const cursorTextRef = useRef<HTMLSpanElement>(null);
	const footerRef = useRef<HTMLButtonElement>(null);

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

	return (
		<button
			aria-label="Copy email address"
			onClick={async () => {
				try {
					if (navigator.clipboard !== null && typeof navigator.clipboard.writeText === "function") {
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
			{children}
		</button>
	);
}

export default FooterCursor;
