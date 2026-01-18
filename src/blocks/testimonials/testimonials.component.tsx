"use client";

import { CaretLeftIcon, CaretRightIcon } from "@phosphor-icons/react/dist/ssr";
import { cva } from "class-variance-authority";
import { gsap } from "gsap";
import Link from "next/link";
import { useCallback, useId, useRef, useState } from "react";
import type { TestimonialsBlock } from "@/payload-types";

const sectionStyles = cva("mx-auto flex max-w-5xl flex-col gap-8", {
	variants: {
		spacing: {
			none: "",
			small: "px-4 py-4 md:px-8 md:py-6 lg:px-0 lg:py-8",
			medium: "px-4 py-8 md:px-8 md:py-12 lg:px-0 lg:py-16",
			large: "px-4 py-16 md:px-8 md:py-24 lg:px-0 lg:py-32",
		},
	},
});

interface TestimonialsBlockProps extends TestimonialsBlock {}

const TestimonialsBlockComponent = (props: TestimonialsBlockProps) => {
	const { title, testimonials } = props;
	const sliderId = useId();
	const testimonialCount = testimonials.length;
	const hasMultipleTestimonials = testimonialCount > 1;

	const [activeIndex, setActiveIndex] = useState<number>(0);
	const blockquoteRef = useRef<HTMLQuoteElement | null>(null);
	const isAnimatingRef = useRef<boolean>(false);

	const animateTo = useCallback(
		(element: Element, vars: gsap.TweenVars) =>
			new Promise<void>((resolve) => {
				gsap.to(element, {
					...vars,
					onComplete: () => resolve(),
				});
			}),
		[]
	);

	const goToIndex = useCallback(
		async (nextIndex: number) => {
			if (!hasMultipleTestimonials) {
				return;
			}

			if (isAnimatingRef.current) {
				return;
			}

			const normalizedNextIndex =
				((nextIndex % testimonialCount) + testimonialCount) % testimonialCount;
			if (normalizedNextIndex === activeIndex) {
				return;
			}

			const currentElement = blockquoteRef.current;
			isAnimatingRef.current = true;

			try {
				if (currentElement) {
					await animateTo(currentElement, {
						autoAlpha: 0,
						y: -12,
						duration: 0.25,
						ease: "power2.out",
					});
				}

				setActiveIndex(normalizedNextIndex);

				await new Promise<void>((resolve) => {
					requestAnimationFrame(() => resolve());
				});

				const nextElement = blockquoteRef.current;
				if (nextElement) {
					gsap.set(nextElement, { autoAlpha: 0, y: 12 });
					await animateTo(nextElement, {
						autoAlpha: 1,
						y: 0,
						duration: 0.35,
						ease: "power2.out",
					});
				}
			} finally {
				isAnimatingRef.current = false;
			}
		},
		[activeIndex, animateTo, hasMultipleTestimonials, testimonialCount]
	);

	const activeTestimonial = testimonials[activeIndex];

	return (
		<section className={sectionStyles({ spacing: props.modifiers?.spacing })}>
			<div className="flex flex-row gap-8">
				<div className="flex w-full max-w-1/4 flex-col items-start">
					<h2>{title}</h2>
					{hasMultipleTestimonials && (
						<div className="mt-auto flex items-center gap-4">
							<button
								aria-controls={sliderId}
								aria-label="Previous testimonial"
								className="flex cursor-pointer items-center justify-center rounded-full border border-black p-2 transition-colors enabled:hover:bg-black enabled:hover:text-white disabled:opacity-50"
								disabled={!hasMultipleTestimonials}
								onClick={() => {
									goToIndex(activeIndex - 1);
								}}
								type="button"
							>
								<CaretLeftIcon
									aria-hidden
									size={14}
								/>
							</button>
							<div className="flex items-center gap-1">
								<span className="sr-only">
									Slide {activeIndex + 1} of {testimonialCount}
								</span>
								{testimonials.map((testimonial, index) => {
									const isActive = index === activeIndex;
									return (
										<button
											aria-hidden
											className={
												isActive
													? "h-2 w-2 rounded-full bg-black"
													: "h-2 w-2 cursor-pointer rounded-full bg-black/20"
											}
											key={testimonial.id ?? index}
											onClick={() => goToIndex(index)}
											type="button"
										/>
									);
								})}
							</div>
							<button
								aria-controls={sliderId}
								aria-label="Next testimonial"
								className="flex cursor-pointer items-center justify-center rounded-full border border-black p-2 transition-colors enabled:hover:bg-black enabled:hover:text-white disabled:opacity-50"
								disabled={!hasMultipleTestimonials}
								onClick={() => {
									goToIndex(activeIndex + 1);
								}}
								type="button"
							>
								<CaretRightIcon
									aria-hidden
									size={14}
								/>
							</button>
						</div>
					)}
				</div>
				<div className="w-full max-w-3/4">
					<div
						aria-live="polite"
						id={sliderId}
					>
						{activeTestimonial ? (
							<blockquote
								key={activeTestimonial.id}
								ref={blockquoteRef}
							>
								<p>“{activeTestimonial.quote}”</p>
								<p className="mt-4 font-semibold">{activeTestimonial.author.authorName}</p>
								<span className="text-2xs">
									{activeTestimonial.author.authorTitle}
									{activeTestimonial.author.authorCompany ? ", " : ""}
									{activeTestimonial.author.authorCompany &&
									activeTestimonial.author.authorCompanyLink ? (
										<Link
											className="text-2xs underline"
											href={activeTestimonial.author.authorCompanyLink}
											rel="noopener noreferrer"
											target="_blank"
										>
											{activeTestimonial.author.authorCompany}
										</Link>
									) : (
										<span>{activeTestimonial.author.authorCompany}</span>
									)}
								</span>
							</blockquote>
						) : null}
					</div>
				</div>
			</div>
		</section>
	);
};

export default TestimonialsBlockComponent;
