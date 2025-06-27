import Image from "next/image";
import Link from "next/link";
import type { PaginatedDocs } from "payload";
import type { Blog, Media } from "@/payload-types";

function PageTemplate(props: PaginatedDocs<Blog>) {
	return (
		<div className="max-w-5xl mx-auto pt-16 px-4">
			<h2 className="text-2xl">Blog</h2>
			<p className="text-base text-pretty max-w-[620px] mb-6">
				A collection of articles, tutorials, and thoughts on web development, design, and
				technology.
			</p>

			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
				{props.docs.map((post, index) => {
					// TODO: Improve media handling
					const media = post.image as Media;

					return (
						<article
							key={post.id}
							className={`group ${index === 0 ? "md:col-span-2 lg:col-span-3" : ""}`}
						>
							<Link
								href={`/blog/${post.slug}`}
								className="space-y-4"
							>
								<div className="relative overflow-hidden rounded-2xl bg-redleather">
									<div className={`relative ${index === 0 ? "aspect-video" : "aspect-[4/3]"}`}>
										{typeof post.image !== "number" &&
											media.url !== undefined &&
											media.url !== null && (
												<Image
													fill
													src={media.url}
													alt=""
													className="w-full h-full object-cover"
												/>
											)}
									</div>
								</div>

								<div className="space-y-2">
									<h3
										className={`font-bold text-pretty ${index === 0 ? "text-xl max-w-4xl" : "text-base"}`}
									>
										{post.title}
									</h3>
									<p
										className={`max-w-lg  ${index === 0 ? "text-xs line-clamp-5" : "text-xs line-clamp-3"}`}
									>
										{post.description}
									</p>
								</div>
							</Link>
						</article>
					);
				})}
			</div>
		</div>
	);
}

export default PageTemplate;
