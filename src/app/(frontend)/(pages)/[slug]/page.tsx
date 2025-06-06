import type { Page as PageType } from "@/payload-types";
import type { ReactElement } from "react";
import type { Metadata } from "next";
import { payload } from "@/util/getPayloadConfig";
import { generateMeta } from "@/util/generateMetadata";
import { PageTemplate } from "./page.template";
import { headers as getHeaders } from "next/headers";

type Args = {
	params: Promise<{ slug: string }>;
};

async function Page({ params }: Args): Promise<ReactElement> {
	const { slug = "home" } = await params;
	const headers = await getHeaders();

	let page: PageType | null = null;

	try {
		const { user } = await payload.auth({
			headers,
		});

		page = await payload
			.find({
				collection: "pages",
				where: {
					slug: {
						equals: slug,
					},
				},
				draft: Boolean(user),
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

export async function generateMetadata({ params }: Args): Promise<Metadata> {
	const { slug = "home" } = await params;

	const page = await payload
		.find({
			collection: "pages",
			limit: 1,
			where: {
				slug: {
					equals: slug,
				},
				_status: {
					equals: "published",
				},
			},
			pagination: false,
		})
		.then((res) => res.docs?.[0]);

	if (!page) return {};

	return generateMeta({ doc: page, collection: "pages" });
}

export default Page;
