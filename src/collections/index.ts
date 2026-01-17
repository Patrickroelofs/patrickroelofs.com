export const COLLECTION_SLUGS = {
	PROJECTS: "projects",
} as const;

export type CollectionSlugs = keyof typeof COLLECTION_SLUGS;
