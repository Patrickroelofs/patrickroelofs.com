import Image from "@/components/Image/Image";
import { RichText } from "@/components/RichText/RichText";
import type { Blog, Media } from "@/payload-types";

function PageTemplate(props: Blog) {
	const { image } = props as {
		image: Media;
	};

	return (
		<>
			<header className="max-w-5xl mx-auto px-2">
				<Image
					{...image}
					className=" rounded-2xl object-cover w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] mt-8"
				/>
				<h1 className="text-l mt-6 mb-12 font-bold tracking-tight">{props.title}</h1>
			</header>

			<RichText lexicalData={props.content} />
		</>
	);
}

export default PageTemplate;
