import { Blocks } from "@/components/blocks";
import type { Page as PageProps } from "@/payload-types";

function PageTemplate(props: PageProps) {
	return <Blocks blocks={props.content?.blocks} />;
}

export default PageTemplate;
