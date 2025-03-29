import { Icon } from "@/components/icon/icon";
import { RichText } from "@/components/richtext/richtext";
import type { FeatureCardType } from "@/payload-types";
import styles from "./feature-card.module.css";

function FeatureCard(props: FeatureCardType) {
  return (
    <div className={styles.card}>
      <Icon name={props.icon} size={64} />
      <RichText data={props.text} />
    </div>
  );
}

export { FeatureCard };
