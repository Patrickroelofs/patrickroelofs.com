import type { ContainerBlockType } from "@/payload-types";
import { Blocks } from "../blocks";
import styles from "./container.module.css";
import { spacingStyles } from "@/util/fieldMaps";
import { cva } from "class-variance-authority";

const containerStyles = cva(styles.container, {
	variants: {
		spacing: spacingStyles,
	},
});

function Container(props: ContainerBlockType) {
	return (
		<div className={containerStyles({ spacing: props.spacing })}>
			<Blocks blocks={props.content} />
		</div>
	);
}

export { Container };
