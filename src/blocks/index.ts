export const BLOCK_SLUGS = {
	PROJECTS: "projectsBlock",
} as const;

export type BlockSlugs = keyof typeof BLOCK_SLUGS;
