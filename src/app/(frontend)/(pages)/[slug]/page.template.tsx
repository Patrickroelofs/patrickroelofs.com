import { Blocks } from "@/components/Blocks";
import type { Page as PageProps } from "@/payload-types";

function PageTemplate(props: PageProps) {
	return <Blocks blocks={props.content?.blocks} />;
}

export { PageTemplate };
