import type { Blog } from "@/payload-types";

function PageTemplate(props: Blog) {
	return (
		<div>
			<p>Blog Post: {props.title}</p>
		</div>
	);
}

export { PageTemplate };
