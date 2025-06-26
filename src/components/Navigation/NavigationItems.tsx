import Link from "next/link";
import { payload } from "@/utils/getPayloadConfig";

async function NavigationItems() {
	const projectsCount = await payload.count({
		collection: "projects",
	});

	const blogCount = await payload.count({
		collection: "blog",
	});

	return (
		<>
			{projectsCount.totalDocs > 0 && (
				<Link
					href="/projects"
					className="text-inherit no-underline font-semibold transition-all duration-300 ease-out px-4 py-2 rounded-3xl relative hover:text-ginger hover:bg-black hover:-translate-y-0.5 focus:text-ginger focus:bg-black focus:-translate-y-0.5"
				>
					Projects
				</Link>
			)}
			{blogCount.totalDocs > 0 && (
				<Link
					href="/blog"
					className="text-inherit no-underline font-semibold transition-all duration-300 ease-out px-4 py-2 rounded-3xl relative hover:text-ginger hover:bg-black hover:-translate-y-0.5 focus:text-ginger focus:bg-black focus:-translate-y-0.5"
				>
					Blog
				</Link>
			)}
		</>
	);
}

export default NavigationItems;
