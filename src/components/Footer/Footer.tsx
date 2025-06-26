import { GithubLogoIcon, LinkedinLogoIcon, MailboxIcon } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import NavigationItems from "../Navigation/NavigationItems";
import { FooterLogo } from "./FooterLogo";
import styles from "./footer.module.css";

function Footer() {
	return (
		<footer className={styles.footer}>
			<FooterLogo />

			<div className={styles.socialSection}>
				<div className={styles.links}>
					<NavigationItems />
				</div>
			</div>

			<div className={styles.bottomSection}>
				<p className={styles.copyright}>Developed with ❤️ by Patrick Roelofs.</p>
				<div className={styles.socialIcons}>
					<Link
						href="mailto:contact@patrickroelofs.com"
						className={styles.socialLink}
						aria-label="Email"
						target="_blank"
					>
						<MailboxIcon
							weight="duotone"
							size={32}
						/>
					</Link>
					<Link
						href="https://github.com/patrickroelofs"
						className={styles.socialLink}
						aria-label="Github"
						target="_blank"
					>
						<GithubLogoIcon
							weight="duotone"
							size={32}
						/>
					</Link>
					<Link
						href="https://www.linkedin.com/in/patrick-roelofs/"
						className={styles.socialLink}
						aria-label="Linkdin"
						target="_blank"
					>
						<LinkedinLogoIcon
							weight="duotone"
							size={32}
						/>
					</Link>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
