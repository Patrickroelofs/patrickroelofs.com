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

	return (
		<>
			<Hero />
			<ProjectsSection />
		</>
	);
}

export default Page;
