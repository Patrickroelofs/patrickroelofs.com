import { draftMode } from "next/headers";
import Link from "next/link";
import { payload } from "@/utils/getPayloadConfig";

async function NavigationItems() {
	const { isEnabled } = await draftMode();
	const projectsCount = await payload.count({
		collection: "projects",
	});

	const blogCount = await payload.count({
		collection: "blog",
		where: {
			_status: {
				equals: isEnabled ? "draft" : "published",
			},
		},
	});

	return (
		<>
			{projectsCount.totalDocs > 0 && (
				<Link
					href="/projects"
					className="text-inherit no-underline font-semibold transition-all duration-300 ease-cubic px-4 py-2 rounded-3xl relative hover:text-ginger hover:bg-black hover:-translate-y-0.5 focus:text-ginger focus:bg-black focus:-translate-y-0.5"
				>
					Projects
				</Link>
			)}
			{blogCount.totalDocs > 0 && (
				<Link
					href="/blog"
					className="text-inherit no-underline font-semibold transition-all duration-300 ease-cubic px-4 py-2 rounded-3xl relative hover:text-ginger hover:bg-black hover:-translate-y-0.5 focus:text-ginger focus:bg-black focus:-translate-y-0.5"
				>
					Blog
				</Link>
			)}
		</>
	);
}

export default NavigationItems;
