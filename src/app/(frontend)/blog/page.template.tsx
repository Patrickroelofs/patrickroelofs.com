import type { PaginatedDocs } from "payload";
import type { Blog } from "@/payload-types";

function PageTemplate(props: PaginatedDocs<Blog>) {
	return (
		<div>
			{props.docs.map((doc) => (
				<div key={doc.id}>
					<h2>{doc.title}</h2>
				</div>
			))}
		</div>
	);
}

export { PageTemplate };
