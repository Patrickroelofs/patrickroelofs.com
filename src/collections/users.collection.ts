import type { CollectionConfig } from "payload";

export const UsersCollection: CollectionConfig = {
	slug: "users",
	admin: {
		useAsTitle: "email",
	},
	auth: true,
	fields: [],
};
