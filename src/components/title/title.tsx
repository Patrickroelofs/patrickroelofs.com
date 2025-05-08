import type { TitleBlockType } from "@/payload-types";

function Title(props: TitleBlockType) {
	return (
		<>
			<h2>{props.title}</h2>
			{props.subtitle && <p>{props.subtitle}</p>}
		</>
	);
}

export { Title };
