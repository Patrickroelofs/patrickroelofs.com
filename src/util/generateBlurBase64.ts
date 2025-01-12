import { APIError, type CollectionBeforeValidateHook } from 'payload';
import { getPlaiceholder } from 'plaiceholder';

const generateBlurBase64: CollectionBeforeValidateHook = async ({
  data,
  req,
}) => {
  try {
    const buffer = req.file?.data;

    if (buffer) {
      const { base64 } = await getPlaiceholder(buffer, {
        size: 32,
      });

      return {
        ...data,
        blurBase64: base64,
      };
    }
  } catch (error) {
    throw new APIError('Failed to generate blur hash');
  }
};
export { generateBlurBase64 };
