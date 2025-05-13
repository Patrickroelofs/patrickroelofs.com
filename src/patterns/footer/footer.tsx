import { payload } from "@/util/getPayloadConfig";
import Link from "next/link";
import { Icon } from "../../components/icon";
import styles from "./footer.module.css";

async function Footer() {
	const { socials } = await payload.findGlobal({
		slug: "settings",
	});

	return (
		<footer className={styles.footer}>
			<h2 className={styles.title}>Patrick Roelofs</h2>
			{socials && (
				<ul className={styles.list}>
					{socials.map((social) => (
						<li key={social.id} className={styles.listItem}>
							<Link href={social.link || "#"} className={styles.link}>
								<Icon name={social.icon} size={48} />
							</Link>
						</li>
					))}
				</ul>
			)}
		</footer>
	);
}

export { Footer };
