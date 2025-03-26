import { Image } from "@/components/image";
import type { HeroType, Media } from "@/payload-types";
import styles from "./hero.module.css";

async function Hero(props: HeroType) {
  const { image } = props as {
    image: Media;
  };

  return (
    <header className={styles.hero}>
      <p className={styles.title}>{props.title}</p>
      <p className={styles.subtitle}>{props.subtitle}</p>
      <div className={styles.wrapper}>
        <Image media={image} className={styles.image} fill />
      </div>
    </header>
  );
}

export { Hero };
