import { Image } from "@unpic/react";

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
		<section className="bg-black text-ginger">
			<div className="mx-auto pt-8 flex max-w-6xl flex-col gap-6 top-32 relative mb-32">
				<div className="mx-auto flex max-w-6xl flex-col justify-start gap-1">
					{title && <p className="text-l">{title}</p>}
				</div>

				{image && (
					<div className="relative mx-auto w-full max-w-6xl">
						<Image
							alt={image.alt}
							className="object-cover rounded-3xl aspect-video"
							height={650}
							src={image.src}
							width={1152}
						/>
					</div>
				)}
			</div>
		</section>
	);
}

export default Hero;
