import NextImage from "next/image";
import type { Media } from "@/payload-types";

interface ImageProps extends Media {
	className?: string;
}

function Image(props: ImageProps) {
	if (!props.url || !props.width || !props.height) {
		throw new Error("Image component requires a url, width & height property");
	}

	return (
		<NextImage
			src={props.url}
			alt={props.alt || ""}
			width={props.width}
			height={props.height}
			className={props.className}
		/>
	);
}

export default Image;
