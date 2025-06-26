import { Project } from "@/payload-types";

function PageTemplate(props: Project) {
	return (
		<div>
			<p>Projects: {props.title}</p>
		</div>
	);
}

export { PageTemplate };
