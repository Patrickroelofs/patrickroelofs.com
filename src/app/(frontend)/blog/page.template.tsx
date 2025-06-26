import type { PaginatedDocs } from "payload";
import Container from "@/components/Container/Container";
import type { Blog } from "@/payload-types";

function PageTemplate(props: PaginatedDocs<Blog>) {
	return (
		<Container>
			{props.docs.map((doc) => (
				<div key={doc.id}>
					<h2>{doc.title}</h2>
				</div>
			))}
		</Container>
	);
}

export { PageTemplate };
