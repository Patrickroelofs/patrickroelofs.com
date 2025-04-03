import { Blocks } from "@/components/blocks";
import type { StickyTitleType } from "@/payload-types";
import styles from "./sticky-title.module.css";

function StickyTitle(props: StickyTitleType) {
  return (
    <section className={styles.container}>
      <div>
        <h2 className={styles.title}>{props.title}</h2>
      </div>
      <div>
        <Blocks blocks={props.blocks} />
      </div>
    </section>
  );
}

export { StickyTitle };
