import { IconLink } from "@/components/link/link";
import { payload } from "@/util/getPayloadConfig";
import styles from "./footer.module.css";

async function Footer() {
  const data = await payload.findGlobal({
    slug: "footer",
    depth: 1,
  });

  return (
    <footer className={styles.footer}>
      <p className={styles.name}>Patrick Roelofs</p>
      <nav className={styles.navigation} aria-label="Social links">
        <ul className={styles.socialLinks}>
          {data.socialLinks?.map((link) => {
            return (
              <li key={link.id}>
                <IconLink
                  href={link.url}
                  size={42}
                  icon={link.icon}
                  target="_blank"
                >
                  {link.label}
                </IconLink>
              </li>
            );
          })}
        </ul>
      </nav>
    </footer>
  );
}

export { Footer };
