import { Blocks } from "@/components/blocks";
import type { GridType } from "@/payload-types";
import { cva } from "class-variance-authority";
import styles from "./grid.module.css";

const gridStyles = cva(styles.grid, {
  variants: {
    columnCount: {
      "3": styles.columnCountThree,
    },
  },
});

async function Grid(props: GridType) {
  return (
    <div
      className={gridStyles({
        columnCount: props.columns,
      })}
    >
      <Blocks blocks={props.content} />
    </div>
  );
}

export { Grid };
