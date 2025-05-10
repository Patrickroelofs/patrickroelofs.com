import type { ContainerBlockType } from "@/payload-types";
import { Blocks } from "../blocks";
import styles from "./container.module.css";
import { cva } from "class-variance-authority";
import { bottomSpacingStyles, topSpacingStyles } from "@/util/fieldMaps";

const containerStyles = cva(styles.container, {
	variants: {
		topSpacing: topSpacingStyles,
		bottomSpacing: bottomSpacingStyles,
	},
});

function Container(props: ContainerBlockType) {
	return (
		<div
			className={containerStyles({
				topSpacing: props.topSpacing,
				bottomSpacing: props.bottomSpacing,
			})}
		>
			<Blocks blocks={props.content} />
		</div>
	);
}

export { Container };
