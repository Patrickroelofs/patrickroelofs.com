import { Blocks } from "@/components/blocks";
import { spacingStyles } from "@/fields/spacing";
import type { GridType } from "@/payload-types";
import { cva } from "class-variance-authority";
import styles from "./grid.module.css";

const gridStyles = cva(styles.grid, {
  variants: {
    columnCount: {
      "2": styles.columnCountTwo,
      "3": styles.columnCountThree,
    },
    spacing: spacingStyles,
  },
});

async function Grid(props: GridType) {
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
