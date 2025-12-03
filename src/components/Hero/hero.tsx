import Image from "next/image";
import image from "@/images/000008510008.jpg";

function Hero() {
	return (
		<section className="mx-auto mt-16 mb-24 flex max-w-5xl flex-col gap-6">
			<div className="mx-auto flex max-w-6xl flex-col justify-start gap-1">
				<h2 className="mb-4 max-w-4xl font-bold text-2xl">
					A front-end developer with a passion for creating.
				</h2>
				<p className="ml-12 text-s">
					A dedicated developer, trusted advisor, and passionate front-end specialist focused on
					creating accessible, high-performing, and user-friendly web experiences.
				</p>
			</div>
			<div className="relative mx-auto aspect-video max-h-[650px] w-full max-w-6xl">
				<Image
					alt=""
					className="rounded-2xl object-cover"
					fill
					loading="eager"
					priority
					src={image}
				/>
			</div>
		</section>
	);
}

export default Hero;
