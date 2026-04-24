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
		<section className="mx-auto mt-64 mb-6 flex max-w-6xl flex-col gap-6">
			<div className="mx-auto flex max-w-6xl flex-col justify-start gap-1">
				{title && <p className="text-s">{title}</p>}
			</div>

			{image && (
				<div className="relative mx-auto aspect-video max-h-162.5 w-full max-w-6xl">
					<Image
						alt={image.alt}
						className="object-cover"
						height={650}
						src={image.src}
						width={1152}
					/>
				</div>
			)}
		</section>
	);
}

export default Hero;
