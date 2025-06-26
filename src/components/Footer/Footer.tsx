import { GithubLogoIcon, LinkedinLogoIcon, MailboxIcon } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import NavigationItems from "../Navigation/NavigationItems";
import { FooterLogo } from "./FooterLogo";

function Footer() {
	return (
		<footer className="max-w-5xl mx-auto px-2 my-3xl flex flex-col gap-l">
			<FooterLogo />

			<div className="flex flex-col items-center">
				<div className="flex gap-xs justify-center flex-wrap">
					<NavigationItems />
				</div>
			</div>

			<div className="flex justify-between items-center border-t border-t-dark-grey pt-s">
				<p className="text-xs">Developed with ❤️ by Patrick Roelofs.</p>
				<div className="flex gap-s justify-center flex-wrap">
					<Link
						href="mailto:contact@patrickroelofs.com"
						className="flex items-center justify-center w-10 h-10 rounded-full transition-all ease-cubic duration-300 bg-transparent hover:bg-black hover:text-ginger hover:-translate-y-0.5 focus:bg-black focus:text-ginger focus:-translate-y-0.5"
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
						className="flex items-center justify-center w-10 h-10 rounded-full transition-all ease-cubic duration-300 bg-transparent hover:bg-black hover:text-ginger hover:-translate-y-0.5 focus:bg-black focus:text-ginger focus:-translate-y-0.5"
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
						className="flex items-center justify-center w-10 h-10 rounded-full transition-all ease-cubic duration-300 bg-transparent hover:bg-black hover:text-ginger hover:-translate-y-0.5 focus:bg-black focus:text-ginger focus:-translate-y-0.5"
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
