import { notFound } from "next/navigation";
import { BlocksMapper } from "@/components/BlocksMapper";
import Hero from "@/components/Hero/hero";
import { GLOBAL_SLUGS } from "@/globals";
import { payload } from "@/utils/getPayloadConfig";

async function Page() {
	const data = await payload.findGlobal({
		slug: GLOBAL_SLUGS.HOMEPAGE,
	});

	if (!data || data._status === "draft") {
		return notFound();
	}

	return (
		<>
			{data.page?.hero && <Hero {...data.page.hero} />}
			<BlocksMapper blocks={data.page.content?.blocks} />
		</>
	);
}

export default Page;
