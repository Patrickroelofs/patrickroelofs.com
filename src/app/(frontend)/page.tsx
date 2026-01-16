import { notFound } from "next/navigation";
import { BlocksMapper } from "@/components/BlocksMapper";
import Hero from "@/components/Hero/hero";
import { GLOBAL_SLUGS } from "@/globals";
import { payload } from "@/utils/getPayloadConfig";

async function Page() {
	const data = await payload.findGlobal({
		slug: GLOBAL_SLUGS.HOMEPAGE,
	});

	if (!data) {
		return notFound();
	}

	const hero = data.page?.hero;

	return (
		<>
			{hero && <Hero {...hero} />}
			<BlocksMapper blocks={data.page.content?.blocks} />
		</>
	);
}

export default Page;
