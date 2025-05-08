import { Blocks } from "@/components/blocks";
import type { StickyTitleType } from "@/payload-types";
import { cva } from "class-variance-authority";
import styles from "./sticky-title.module.css";
import { spacingStyles } from "@/util/fieldMaps";

const stickyTitleStyles = cva(styles.container, {
	variants: {
		spacing: spacingStyles,
	},
});

function StickyTitle(props: StickyTitleType) {
	return (
		<section
			className={stickyTitleStyles({
				spacing: props.spacing,
			})}
		>
			<h2 className={styles.title}>{props.title}</h2>
			<div>
				<Blocks blocks={props.blocks} />
			</div>
		</section>
	);
}

export { StickyTitle };
