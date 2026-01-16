import Image from "next/image";
import type { HomepageHero } from "@/payload-types";

interface HeroProps extends HomepageHero {}

function Hero(props: HeroProps) {
	const { title, image } = props;

	return (
		<section className="mx-auto mt-64 mb-6 flex max-w-5xl flex-col gap-6">
			<div className="mx-auto flex max-w-6xl flex-col justify-start gap-1">
				{title && <p className="text-s">{title}</p>}
			</div>

			{image && typeof image !== "string" && typeof image.url === "string" && (
				<div className="relative mx-auto aspect-video max-h-162.5 w-full max-w-6xl">
					<Image
						alt=""
						className="rounded-2xl object-cover"
						fill
						loading="eager"
						priority
						src={image.url}
					/>
				</div>
			)}
		</section>
	);
}

export default Hero;
