import { notFound } from "next/navigation";
import Hero from "@/components/Hero/hero";
import { GLOBAL_SLUGS } from "@/globals";
import ProjectsSection from "@/sections/ProjectsSection/ProjectsSection";
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
			<ProjectsSection />
		</>
	);
}

export default Page;
