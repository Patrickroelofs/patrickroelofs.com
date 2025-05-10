import type { TitleBlockType } from "@/payload-types";
import styles from "./title.module.css";
import { cva } from "class-variance-authority";
import { bottomSpacingStyles, topSpacingStyles } from "@/util/fieldMaps";

const titleStyles = cva(styles.container, {
	variants: {
		topSpacing: topSpacingStyles,
		bottomSpacing: bottomSpacingStyles,
	},
});

function Title(props: TitleBlockType) {
	return (
		<div
			className={titleStyles({
				topSpacing: props.topSpacing,
				bottomSpacing: props.bottomSpacing,
			})}
		>
			{props.subtitle && (
				<p className={styles.subtitle}>
					<span>{props.subtitle}</span>
				</p>
			)}
			<h2 className={styles.title}>{props.title}</h2>
		</div>
	);
}

export { Title };
