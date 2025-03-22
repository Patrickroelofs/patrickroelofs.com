import { Icon } from "@/components/icon/icon";
import { payload } from "@/util/getPayloadConfig";
import Link from "next/link";
import styles from "./footer.module.css";

async function Footer() {
  const data = await payload.findGlobal({
    slug: "footer",
    depth: 1,
  });

  return (
    <footer className={styles.footer}>
      <p className={styles.name}>
        Patrick
        <br />
        Roelofs
      </p>
      <nav className={styles.navigation}>
        <ul className={styles.socialLinks}>
          {data.socialLinks?.map((link) => {
            return (
              <li key={link.id}>
                <Link href={link.url}>
                  <Icon name={link.icon} size={36} />
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </footer>
  );
}

export { Footer };
