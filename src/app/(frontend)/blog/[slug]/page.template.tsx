import { RichText } from "@/components/RichText/RichText";
import type { Blog } from "@/payload-types";

function PageTemplate(props: Blog) {
	return <RichText lexicalData={props.content} />;
}

export default PageTemplate;
