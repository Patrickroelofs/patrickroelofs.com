import type { Page as PageType } from "@/payload-types";
import { payload } from "@/util/getPayloadConfig";
import type { ReactElement } from "react";
import { PageTemplate } from "./page";

type Args = {
	params: Promise<{ slug: string }>;
};

async function Page({ params }: Args): Promise<ReactElement> {
	const { slug = "home" } = await params;

	let page: PageType | null = null;

	try {
		page = await payload
			.find({
				collection: "pages",
				where: {
					slug: {
						equals: slug,
					},
				},
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
	} catch (error) {
		// TODO: Handle 500 error
		return <p>500</p>;
	}
}

export async function generateStaticParams() {
	try {
		const pages = await payload
			.find({
				collection: "pages",
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
	} catch (error) {
		return [];
	}
}

export default Page;
