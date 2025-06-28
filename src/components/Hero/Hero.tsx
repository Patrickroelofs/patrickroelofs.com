import Image from "next/image";
import image from "@/images/000008510008.jpg";

function Hero() {
	return (
		<section className="flex flex-col gap-6 mt-16 mb-24 max-w-5xl mx-auto">
			<div className="flex flex-col gap-1 mx-auto max-w-6xl justify-start">
				<h2 className="text-2xl mb-4 font-bold max-w-4xl">
					A front-end developer with a passion for creating.
				</h2>
				<p className="text-s ml-12">
					A dedicated developer, trusted advisor, and passionate front-end specialist focused on
					creating accessible, high-performing, and user-friendly web experiences.
				</p>
			</div>
			<div className="relative mx-auto max-w-6xl w-full aspect-video max-h-[650px]">
				{/* <Image
					priority
					loading="eager"
					alt=""
					src={image}
					fill
					className="rounded-2xl object-cover"
				/> */}
			</div>
		</section>
	);
}

export default Hero;
