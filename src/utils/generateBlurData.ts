import type { CollectionBeforeValidateHook } from "payload";
import { getPlaiceholder } from "plaiceholder";

const generateBlurData: CollectionBeforeValidateHook = async ({ data, req }) => {
	try {
		const buffer = req.file?.data;

		if (buffer) {
			const { base64 } = await getPlaiceholder(buffer, {
				size: 32,
				format: ["png"],
				removeAlpha: true,
			});

			if (base64 && typeof base64 === "string" && base64.startsWith("data:")) {
				return {
					...data,
					blurData: base64,
				};
			}
		}
	} catch (error) {
		console.warn("Failed to generate blur data:", error);
	}

	return data;
};

export { generateBlurData };
