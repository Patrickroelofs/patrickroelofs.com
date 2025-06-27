import { draftMode } from "next/headers";
import type { ReactElement } from "react";
import type { Blog } from "@/payload-types";
import { payload } from "@/utils/getPayloadConfig";
import PageTemplate from "./page.template";

type Args = {
	params: Promise<{ slug: string }>;
};

async function Page({ params }: Args): Promise<ReactElement> {
	const { slug } = await params;
	const { isEnabled } = await draftMode();

	let page: Blog | null = null;

	try {
		page = await payload
			.find({
				collection: "blog",
				where: {
					slug: {
						equals: slug,
					},
				},
				draft: isEnabled,
				limit: 1,
			})
			.then((result) => {
				if (result.docs.length === 0) {
					return null;
				}

				return result.docs[0] ?? null;
			});

		// TODO: Handle 404 error
		if (!page) return <p>404</p>;

		return <PageTemplate {...page} />;
	} catch (_error) {
		// TODO: Handle 500 error
		return <p>500</p>;
	}
}

export async function generateStaticParams() {
	try {
		const pages = await payload
			.find({
				collection: "blog",
				where: {
					_status: {
						equals: "published",
					},
				},
			})
			.then((result) => {
				if (result.docs.length === 0) {
					return null;
				}

				return result.docs;
			});

		if (!pages) {
			return [];
		}

		return pages.map((page) => ({
			slug: page.slug,
		}));
	} catch (_error) {
		return [];
	}
}

export default Page;
