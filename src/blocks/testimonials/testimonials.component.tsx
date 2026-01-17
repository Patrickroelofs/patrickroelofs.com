import type { TestimonialsBlock } from "@/payload-types";
import TestimonialClientComponent from "./testimonials.client";

interface TestimonialsBlockProps extends TestimonialsBlock {}

const TestimonialsBlockComponent = (props: TestimonialsBlockProps) => {
	const { title, testimonials } = props;

	return (
		<section className="mx-auto flex max-w-5xl flex-col gap-8">
			<div className="flex flex-row gap-8">
				<div className="w-full max-w-1/4">
					<h2>{title}</h2>
				</div>
				<div className="w-full max-w-3/4">
					<TestimonialClientComponent testimonials={testimonials} />
				</div>
			</div>
		</section>
	);
};

export default TestimonialsBlockComponent;
