import type { TitleBlockType } from "@/payload-types";
import styles from "./title.module.css";
import { spacingStyles } from "@/util/fieldMaps";
import { cva } from "class-variance-authority";

const titleStyles = cva(styles.container, {
	variants: {
		spacing: spacingStyles,
	},
});

function Title(props: TitleBlockType) {
	return (
		<div className={titleStyles({ spacing: props.spacing })}>
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
