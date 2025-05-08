import { Blocks } from "@/components/blocks";
import type { GridBlockType } from "@/payload-types";
import { cva } from "class-variance-authority";
import styles from "./grid.module.css";
import { spacingStyles } from "@/util/fieldMaps";

const gridStyles = cva(styles.grid, {
	variants: {
		columnCount: {
			"2": styles.columnCountTwo,
			"3": styles.columnCountThree,
			"4": styles.columnCountFour,
			"5": styles.columnCountFive,
			"6": styles.columnCountSix,
		},
		spacing: spacingStyles,
	},
});

function Grid(props: GridBlockType) {
	return (
		<div
			className={gridStyles({
				columnCount: props.columns,
				spacing: props.spacing,
			})}
		>
			<Blocks blocks={props.content} />
		</div>
	);
}

export { Grid };
