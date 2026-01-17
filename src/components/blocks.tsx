import { BLOCK_SLUGS } from "@/blocks";
import ProjectsBlockComponent from "@/blocks/projects/projects.component";
import TestimonialBlockComponent from "@/blocks/testimonials/testimonials.component";
import type { ProjectsBlock } from "@/payload-types";

const blockComponents = {
	[BLOCK_SLUGS.PROJECTS]: ProjectsBlockComponent,
	[BLOCK_SLUGS.TESTIMONIALS]: TestimonialBlockComponent,
};

interface BlocksProps {
	blocks?: ProjectsBlock[] | null;
}

export const Blocks = (props: BlocksProps) => {
	const { blocks } = props;

	const hasBlocks = blocks && Array.isArray(blocks) && blocks.length > 0;

	if (!hasBlocks) {
		return null;
	}

	return (
		<>
			{blocks.map((block, index) => {
				const { blockType } = block;

				if (blockType && blockType in blockComponents) {
					const Block = blockComponents[blockType];

					if (Block) {
						return (
							<Block
								// biome-ignore lint/suspicious/noArrayIndexKey: Allowed here due to static content
								key={index}
								{...block}
							/>
						);
					}
				}

				return null;
			})}
		</>
	);
};
