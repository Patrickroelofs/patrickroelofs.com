import { notFound } from "next/navigation";
import { COLLECTION_SLUGS } from "@/collections";
import { ImageMedia } from "@/components/Media/ImageMedia";
import type { Media } from "@/payload-types";
import { payload } from "@/utils/getPayloadConfig";

export async function generateStaticParams() {
	const pages = await payload.find({
		collection: COLLECTION_SLUGS.PROJECTS,
		draft: false,
		pagination: false,
		select: {
			slug: true,
		},
	});

	const params = pages.docs.map(({ slug }) => {
		return { slug };
	});

	return params;
}

interface Args {
	params: Promise<{
		slug?: string;
	}>;
}

export default async function Page({ params: paramsPromise }: Args) {
	const { slug } = await paramsPromise;

	const page = await payload.find({
		collection: COLLECTION_SLUGS.PROJECTS,
		draft: false,
		where: {
			slug: {
				equals: slug,
			},
		},
		pagination: false,
	});

	const doc = page.docs[0];

	if (!doc) {
		return notFound();
	}

	return (
		<article className="mx-auto mt-16 mb-6 flex max-w-5xl flex-col gap-6">
			<div className="relative h-128 w-full">
				<ImageMedia
					{...(doc.meta.thumbnail as Media)}
					alt=""
					fill
					loading="eager"
					priority
				/>
			</div>
			<h2 className="max-w-4xl font-medium text-2xl">{doc.title}</h2>
		</article>
	);
}
