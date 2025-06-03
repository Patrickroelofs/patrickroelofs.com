import { Hero } from "@/patterns/Hero/Hero";
import { Section } from "@/patterns/Section/Section";
import type {
	HeroBlockType,
	RichTextBlockType,
	SectionBlockType,
} from "@/payload-types";
import type { ComponentType } from "react";
import { RichText } from "./RichText/RichText";

interface BlocksProps {
	blocks:
		| (HeroBlockType | SectionBlockType | RichTextBlockType)[]
		| null
		| undefined;
}

const components = {
	hero: Hero,
	section: Section,
	richText: RichText,
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
