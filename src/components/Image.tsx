import type { Media } from "@/payload-types";
import NextImage, { type ImageProps as NextImageProps } from "next/image";
import type { ReactElement } from "react";

type ImageProps = {
	media: Media | number;
} & Omit<NextImageProps, "src" | "alt">;

function Image(props: ImageProps): ReactElement {
	const { media, ...rest } = props;

	if (typeof media === "number") {
		// TODO: Handle when image is an id reference to the Media Collection
		throw new Error("Image media is not defined");
	}

	// TODO: Implement responsive image sizes
	// const breakpoints = [480, 768, 1024, 1280, 1440, 1600];
	// const sizes =
	//   props.sizes ||
	//   Object.entries(breakpoints)
	//     .map(([, value]) => `(max-width: ${value}px) ${value}px`)
	//     .join(", ");

	return (
		<NextImage
			placeholder={media.blurData ? "blur" : "empty"}
			blurDataURL={media.blurData ?? ""}
			src={media.url ?? ""}
			alt={media.alt ?? ""}
			// sizes={sizes}
			{...rest}
		/>
	);
}

export { Image };
