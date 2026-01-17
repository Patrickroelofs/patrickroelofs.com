export const BLOCK_SLUGS = {
	PROJECTS: "projectsBlock",
	TESTIMONIALS: "testimonialsBlock",
} as const;

export type BlockSlugs = keyof typeof BLOCK_SLUGS;
