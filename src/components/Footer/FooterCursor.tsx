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

		if (!cursor || !cursorText || !footer) return;

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
			type="button"
			ref={footerRef}
			aria-label="Copy email address"
			onClick={() => {
				navigator.clipboard.writeText(email);
				setIsCopied(true);
			}}
		>
			<div
				ref={cursorRef}
				className="p-2xs fixed top-0 left-0 opacity-0 bg-black/30 backdrop-blur-lg rounded-full pointer-events-none z-50 flex"
			>
				<span
					ref={cursorTextRef}
					className="text-ginger text-xs font-bold"
				>
					{isCopied ? "Copied!" : "Click to copy email"}
				</span>
			</div>
			{children}
		</button>
	);
}

export default FooterCursor;
