import type { HeroBlockType, RichTextBlock } from "@/payload-types";
import type { ComponentType } from "react";
import { Hero } from "./hero/hero";
import { RichText } from "./richtext/richtext";

interface BlocksProps {
	blocks: (RichTextBlock | HeroBlockType)[] | null | undefined;
}

const components = {
	hero: Hero,
	"rich-text": RichText,
};

function Blocks({ blocks }: BlocksProps) {
	if (blocks === null || blocks === undefined) {
		return null;
	}

	return (
		<>
			{blocks.map((block) => {
				const { blockType } = block;

				if (blockType in components) {
					const BlockComponent = components[blockType] as ComponentType;

					return <BlockComponent key={block.id} {...block} />;
				}

				return null;
			})}
		</>
	);
}

export { Blocks };
