import { Blocks } from "@/components/blocks";
import type { Page } from "@/payload-types";

function PageTemplate(props: Page) {
	return <Blocks blocks={props.content?.blocks} />;
}

export { PageTemplate };
