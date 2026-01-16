import NextImage from "next/image";
import type { Media } from "@/payload-types";

interface ImageMediaProps extends Media {
	className?: string;
	fill?: boolean;
	loading?: "eager" | "lazy";
	priority?: boolean;
}

export const ImageMedia = (props: ImageMediaProps) => {
	const { url, alt, className, fill, loading, priority } = props;

	const src = typeof url === "string" ? url : undefined;

	if (!src) {
		return null;
	}

	return (
		<picture className={className}>
			<NextImage
				alt={alt || ""}
				fill={fill}
				loading={loading}
				priority={priority}
				quality={100}
				src={src}
			/>
		</picture>
	);
};
