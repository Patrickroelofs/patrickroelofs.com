import { Blocks } from "@/components/blocks";
import type { StickyTitleType } from "@/payload-types";
import { cva } from "class-variance-authority";
import styles from "./sticky-title.module.css";
import { bottomSpacingStyles, topSpacingStyles } from "@/util/fieldMaps";

const stickyTitleStyles = cva(styles.container, {
	variants: {
		topSpacing: topSpacingStyles,
		bottomSpacing: bottomSpacingStyles,
	},
});

function StickyTitle(props: StickyTitleType) {
	return (
		<section
			className={stickyTitleStyles({
				topSpacing: props.topSpacing,
				bottomSpacing: props.bottomSpacing,
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
