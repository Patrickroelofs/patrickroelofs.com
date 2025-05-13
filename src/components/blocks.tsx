import { Hero } from "@/patterns/hero/hero";
import type { HeroBlockType } from "@/payload-types";
import type { ComponentType } from "react";

interface BlocksProps {
	blocks: HeroBlockType[] | null | undefined;
}

const components = {
	hero: Hero,
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
