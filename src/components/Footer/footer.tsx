import { GithubLogoIcon, LinkedinLogoIcon, MailboxIcon } from "@phosphor-icons/react/ssr";
import Link from "next/link";
import FooterCursor from "./footer-cursor";
import { FooterLogo } from "./footer-logo";

function Footer() {
	return (
		<footer className="mx-auto my-3xl flex max-w-5xl flex-col gap-l px-2">
			<FooterCursor>
				<FooterLogo />
			</FooterCursor>

			<div className="flex items-center justify-between border-t border-t-dark-grey pt-s">
				<p className="text-xs">Developed with ❤️ by Patrick Roelofs.</p>
				<div className="flex flex-wrap justify-center gap-s">
					<Link
						aria-label="Email"
						className="flex h-10 w-10 items-center justify-center rounded-full bg-transparent transition-all duration-300 ease-cubic hover:-translate-y-0.5 hover:bg-black hover:text-ginger focus:-translate-y-0.5 focus:bg-black focus:text-ginger"
						href="mailto:contact@patrickroelofs.com"
						target="_blank"
					>
						<MailboxIcon
							size={32}
							weight="duotone"
						/>
					</Link>
					<Link
						aria-label="Github"
						className="flex h-10 w-10 items-center justify-center rounded-full bg-transparent transition-all duration-300 ease-cubic hover:-translate-y-0.5 hover:bg-black hover:text-ginger focus:-translate-y-0.5 focus:bg-black focus:text-ginger"
						href="https://github.com/patrickroelofs"
						target="_blank"
					>
						<GithubLogoIcon
							size={32}
							weight="duotone"
						/>
					</Link>
					<Link
						aria-label="LinkedIn"
						className="flex h-10 w-10 items-center justify-center rounded-full bg-transparent transition-all duration-300 ease-cubic hover:-translate-y-0.5 hover:bg-black hover:text-ginger focus:-translate-y-0.5 focus:bg-black focus:text-ginger"
						href="https://www.linkedin.com/in/patrick-roelofs/"
						target="_blank"
					>
						<LinkedinLogoIcon
							size={32}
							weight="duotone"
						/>
					</Link>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
