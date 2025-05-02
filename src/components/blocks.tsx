import type {
	GridBlockType,
	HeroBlockType,
	IconCardType,
	RichTextBlock,
	StickyTitleBlock,
} from "@/payload-types";
import type { ComponentType } from "react";
import { Hero } from "./hero/hero";
import { RichText } from "./richtext/richtext";
import { StickyTitle } from "./sticky-title/sticky-title";
import { Grid } from "./grid/grid";
import { IconCard } from "./icon-card/icon-card";

interface BlocksProps {
	blocks:
		| (
				| RichTextBlock
				| HeroBlockType
				| StickyTitleBlock
				| GridBlockType
				| IconCardType
		  )[]
		| null
		| undefined;
}

const components = {
	hero: Hero,
	"rich-text": RichText,
	"sticky-title": StickyTitle,
	grid: Grid,
	"icon-card": IconCard,
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
