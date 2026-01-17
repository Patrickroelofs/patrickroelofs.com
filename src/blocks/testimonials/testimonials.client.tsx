import Link from "next/link";
import type { TestimonialsBlock } from "@/payload-types";

const TestimonialClientComponent = ({
	testimonials,
}: {
	testimonials: TestimonialsBlock["testimonials"];
}) => {
	return (
		<>
			{testimonials.map((testimonial) => (
				<blockquote key={testimonial.id}>
					<p>“{testimonial.quote}”</p>
					<p className="mt-4 font-semibold">{testimonial.author.authorName}</p>
					<span className="text-2xs">
						{testimonial.author.authorTitle}
						{testimonial.author.authorCompany && ", "}
						{testimonial.author.authorCompanyLink && (
							<Link
								className="text-2xs underline"
								href={testimonial.author.authorCompanyLink}
								rel="noopener noreferrer"
								target="_blank"
							>
								{testimonial.author.authorCompany}
							</Link>
						)}
					</span>
				</blockquote>
			))}
		</>
	);
};

export default TestimonialClientComponent;
