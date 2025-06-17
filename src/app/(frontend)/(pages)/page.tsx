import Hero from "@/components/Hero/Hero";
import TextWithSide from "@/components/TextWithSide/TextWithSide";
import { ArrowSquareOutIcon } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

function Page() {
	return (
		<>
			<Hero />
			<TextWithSide title="About me">
				<div className="rich-text">
					<p>
						Hi there! I'm Patrick Roelofs, a dedicated front-end developer. I
						currently contribute my skills at{" "}
						<Link href="https://iquality.nl" target="_blank">
							Iquality
							<ArrowSquareOutIcon weight="duotone" size="32" />
						</Link>
						, where I focus on building and creating engaging digital
						experiences.
					</p>
					<p>
						In my work, I utilize modern web technologies, with a particular
						focus on TypeScript, to craft robust and dynamic front-end
						solutions. I'm also deeply committed to ensuring these solutions are
						highly accessible, making the web a better place for everyone. I
						enjoy turning ideas into functional, visually appealing, and
						universally usable realities on the web.
					</p>
				</div>
			</TextWithSide>
		</>
	);
}

export default Page;
