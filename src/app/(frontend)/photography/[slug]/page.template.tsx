import Image from "@/components/Image/Image";
import type { Media, Photography } from "@/payload-types";

function PageTemplate(props: Photography) {
	const { image } = props as {
		image: Media;
	};

	return (
		<header className="max-w-5xl mx-auto px-2 pt-12">
			<Image
				{...image}
				className="rounded-2xl aspect-video object-cover"
			/>
			<h1 className="text-xl mt-6 font-bold tracking-tight">{props.title}</h1>
			<p className="text-lg mb-8">{props.description}</p>
		</header>
	);
}

export default PageTemplate;
