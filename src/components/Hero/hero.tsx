import type { HomepageHero } from "@/payload-types";
import { ImageMedia } from "../Media/ImageMedia";

interface HeroProps extends HomepageHero {}

function Hero(props: HeroProps) {
	const { title, image } = props;

	return (
		<section className="mx-auto mt-64 mb-6 flex max-w-5xl flex-col gap-6">
			<div className="mx-auto flex max-w-6xl flex-col justify-start gap-1">
				{title && <p className="text-s">{title}</p>}
			</div>

			{image && typeof image !== "string" && (
				<div className="relative mx-auto aspect-video max-h-162.5 w-full max-w-6xl">
					<ImageMedia
						{...image}
						alt=""
						className="[&>img]:rounded-2xl [&>img]:object-cover [&>img]:object-center"
						fill
						loading="eager"
						priority
					/>
				</div>
			)}
		</section>
	);
}

export default Hero;
