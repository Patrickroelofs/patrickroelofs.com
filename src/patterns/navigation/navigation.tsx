import type { Page } from "@/payload-types";
import { payload } from "@/util/getPayloadConfig";
import Link from "next/link";
import styles from "./navigation.module.css";

async function Navigation() {
  const data = await payload.findGlobal({
    slug: "navigation",
    depth: 1,
  });

  return (
    <nav className={styles.navigation} aria-label="Main navigation">
      <Link href="/" className={styles.logo}>
        <h1>Patrick Roelofs</h1>
      </Link>
      <div>
        <ul className={styles.list}>
          {data.navigation?.links?.map((link) => {
            if (link.link?.relationTo === "pages") {
              const pageLink = link.link.value as Page;

              return (
                <li key={link.id} className={styles.listItem}>
                  <Link
                    className={styles.link}
                    href={`/${pageLink.slug === "home" ? "" : pageLink.slug}`}
                  >
                    {link.overrideLabel ? link.label : pageLink.title}
                  </Link>
                </li>
              );
            }

            return null;
          })}
        </ul>
      </div>
    </nav>
  );
}

export { Navigation };
