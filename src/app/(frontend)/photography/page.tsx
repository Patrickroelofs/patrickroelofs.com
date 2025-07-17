import Image from "next/image";
import Link from "next/link";
import type { Media } from "@/payload-types";
import { payload } from "@/utils/getPayloadConfig";

async function Page() {
	const { docs } = await payload.find({
		collection: "photography",
	});

	return (
		<div className="p-8">
			<h1 className="text-2xl font-bold mb-4 text-center mt-12">Photography</h1>
			<p className="text-center mb-12">Occassionally I take photos.</p>
			<div className="grid grid-cols-2 gap-8">
				<div className="flex flex-col gap-8">
					{docs
						.filter((_, i) => i % 2 === 0)
						.map((doc, idx) => (
							<Link
								href={`/photography/${doc.slug}`}
								key={doc.id || idx}
							>
								<article>
									<div className="relative aspect-square">
										{doc.image && (
											<Image
												src={(doc.image as Media).sizes?.["square-full"]?.url as string}
												alt={(doc.image as Media).alt}
												fill
												className="object-cover"
											/>
										)}
									</div>
									<h2 className="text-s pt-2 font-medium">{doc.title}</h2>
									<p className="text-xs pt-1">{doc.description}</p>
								</article>
							</Link>
						))}
				</div>
				<div className="flex flex-col gap-8 mt-32">
					{docs
						.filter((_, i) => i % 2 === 1)
						.map((doc, idx) => (
							<Link
								href={`/photography/${doc.slug}`}
								key={doc.id || idx}
							>
								<article key={doc.id || idx}>
									<div className="relative aspect-square">
										{doc.image && (
											<Image
												src={(doc.image as Media).sizes?.["square-full"]?.url as string}
												alt={(doc.image as Media).alt}
												fill
												className="object-cover"
											/>
										)}
									</div>
									<h2 className="text-s pt-2 font-medium">{doc.title}</h2>
									<p className="text-xs pt-1">{doc.description}</p>
								</article>
							</Link>
						))}
				</div>
			</div>
		</div>
	);
}

export default Page;
