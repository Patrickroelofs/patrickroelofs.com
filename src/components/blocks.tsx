import type {
	ContainerBlockType,
	GridBlockType,
	HeroBlockType,
	IconCardType,
	RichTextType,
	ScrollingTextType,
	StickyTitleType,
	TitleBlockType,
} from "@/payload-types";
import type { ComponentType } from "react";
import { Hero } from "./hero/hero";
import { RichText } from "./richtext/richtext";
import { StickyTitle } from "./sticky-title/sticky-title";
import { Grid } from "./grid/grid";
import { IconCard } from "./icon-card/icon-card";
import { ScrollingText } from "./scrolling-text/scrolling-text";
import { Container } from "./container/container";
import { Title } from "./title/title";

interface BlocksProps {
	blocks:
		| (
				| RichTextType
				| HeroBlockType
				| StickyTitleType
				| GridBlockType
				| IconCardType
				| ScrollingTextType
				| ContainerBlockType
				| TitleBlockType
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
	"scrolling-text": ScrollingText,
	container: Container,
	title: Title,
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
