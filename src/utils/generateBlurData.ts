import { APIError, type CollectionBeforeValidateHook } from "payload";
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

			return {
				...data,
				blurData: base64,
			};
		}
	} catch (_) {
		throw new APIError("Failed to generate blur hash");
	}
};

export { generateBlurData };
