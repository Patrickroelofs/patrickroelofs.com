import NextImage from "next/image";
import type { Media } from "@/payload-types";

interface ImageProps extends Media {
	className?: string;
}

function Image(props: ImageProps) {
	if (!(props.url && props.width && props.height)) {
		throw new Error("Image component requires a url, width & height property");
	}

	return (
		<NextImage
			alt={props.alt || ""}
			className={props.className}
			height={props.height}
			src={props.url}
			width={props.width}
		/>
	);
}

export default Image;
