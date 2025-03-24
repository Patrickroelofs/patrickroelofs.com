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
    <nav className={styles.navigation}>
      <Link href="#" className={styles.logo}>
        <h1>Patrick Roelofs</h1>
      </Link>
      <div className="flex md:justify-end">
        <ul className="flex space-x-6">
          {data.navigation?.links?.map((link) => {
            if (link.link?.relationTo === "pages") {
              const pageLink = link.link.value as Page;

              return (
                <li key={link.id}>
                  <Link
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
