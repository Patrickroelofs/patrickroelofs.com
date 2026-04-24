import { createFileRoute } from "@tanstack/react-router";
import Hero from "#/components/hero/hero";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
	return (
			<Hero
				title="A dedicated developer, trusted advisor, and passionate front-end developer focused on creating accessible, high-performing, and user-friendly websites."
				image={{
					src: "https://placehold.co/1152x650",
					alt: "Placeholder image",
				}}
			/>
	);
}
