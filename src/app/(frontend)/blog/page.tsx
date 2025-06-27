import type { PaginatedDocs } from "payload";
import type { ReactElement } from "react";
import type { Blog } from "@/payload-types";
import { payload } from "@/utils/getPayloadConfig";
import PageTemplate from "./page.template";

async function Page(): Promise<ReactElement> {
	let pages: PaginatedDocs<Blog> | null = null;

	try {
		pages = await payload
			.find({
				collection: "blog",
			})
			.then((result) => {
				if (result.docs.length === 0) {
					return null;
				}

				return result;
			});

		// TODO: Handle 404 error
		if (!pages) return <p>404</p>;

		return <PageTemplate {...pages} />;
	} catch (_error) {
		// TODO: Handle 500 error
		return <p>500</p>;
	}
}

export default Page;
