import { createFileRoute } from "@tanstack/react-router";
import Image from "#/assets/000008510008.jpg";
import AboutMeSection from "#/components/about-me/about-me";
import ExperienceSection from "#/components/experience/experience";
import Hero from "#/components/hero/hero";
import WorkSection from "#/components/work/work";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
	return (
		<>
			<Hero
				title="A dedicated developer, trusted advisor, and passionate front-end developer focused on creating accessible, high-performing, and user-friendly websites."
				image={{
					src: Image,
					alt: "Placeholder image",
				}}
			/>

			<AboutMeSection />
			<ExperienceSection />
			{/* <WorkSection /> */}
		</>
	);
}
