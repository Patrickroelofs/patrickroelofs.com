import Image from "next/image";
import image from "@/images/000008510008.jpg";

function Hero() {
	return (
		<section className="mx-auto mt-64 mb-6 flex max-w-5xl flex-col gap-6">
			<div className="mx-auto flex max-w-6xl flex-col justify-start gap-1">
				<p className="text-s">
					A dedicated developer, trusted advisor, and passionate front-end developer focused on
					creating accessible, high-performing, and user-friendly websites.
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
