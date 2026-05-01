import { Image } from "@unpic/react";
import Scotch1 from "#/assets/18.png";
import Scotch2 from "#/assets/86.png";

interface HeroProps {
	title: string;
	image: {
		src: string;
		alt: string;
	};
}

function Hero(props: HeroProps) {
	const { title, image } = props;

	return (
		<section className="bg-black text-ginger px-4">
			<div className="mx-auto pt-8 flex max-w-6xl flex-col gap-6 top-16 md:top-32 relative mb-32">
				<div className="mx-auto flex max-w-6xl flex-col justify-start gap-1">
					{title && <p className="text-m md:text-l indent-3xl">{title}</p>}
				</div>

				{image && (
					<div className="relative mx-auto w-full max-w-6xl mt-16">
						<Image
							alt={image.alt}
							className="object-cover rounded-3xl aspect-video"
							height={650}
							src={image.src}
							width={1152}
						/>

						<Image
							className="absolute -right-10 -top-22 w-52 -rotate-12"
							src={Scotch1}
							alt=""
							width={364}
							height={405}
						/>

						<Image
							className="absolute -left-16 -bottom-20 w-58"
							src={Scotch2}
							alt=""
							width={340}
							height={198}
						/>
					</div>
				)}
			</div>
		</section>
	);
}

export default Hero;
