import { Blocks } from "@/components/Blocks";
import type { SectionBlockType } from "@/payload-types";

function Section(props: SectionBlockType) {
	return (
		<section className="mx-auto max-w-6xl px-2">
			<Blocks blocks={props.content} />
		</section>
	);
}

export { Section };
