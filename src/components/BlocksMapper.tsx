import { BLOCK_SLUGS } from "@/blocks";
import type { ProjectsBlock } from "@/payload-types";
import ProjectsSection from "@/sections/ProjectsSection/ProjectsSection";

const blockComponents = {
	[BLOCK_SLUGS.PROJECTS]: ProjectsSection,
};

interface BlocksMapperProps {
	blocks?: ProjectsBlock[] | null;
}

export const BlocksMapper = (props: BlocksMapperProps) => {
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
