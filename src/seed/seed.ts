import config from "@payload-config";
import { type File, getPayload } from "payload";

import { GlobalFooter, Medias, PageOne, Users } from "./data";

async function fetchFileByURL(url: string): Promise<File> {
  const res = await fetch(url, {
    credentials: "include",
    method: "GET",
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch file from ${url}, status: ${res.status}`);
  }

  const data = await res.arrayBuffer();

  return {
    name: url.split("/").pop() || `file-${Date.now()}`,
    data: Buffer.from(data),
    mimetype: `image/${url.split(".").pop()}`,
    size: data.byteLength,
  };
}

async function run() {
  try {
    const payload = await getPayload({ config });

    for (const user of Users) {
      await payload.create({
        collection: "users",
        data: user,
      });
    }

    const [image1Buffer] = await Promise.all([
      fetchFileByURL(
        "https://patrickroelofs.com/api/media/file/keith-hardy-PP8Escz15d8-unsplash.jpg",
      ),
    ]);

    const image = await payload.create({
      collection: "media",
      data: Medias[0],
      file: image1Buffer,
    });

    await payload.create({
      collection: "pages",
      data: PageOne({
        heroImage: image,
      }),
    });

    await payload.updateGlobal({
      slug: "footer",
      data: GlobalFooter,
    });
  } catch (error) {
    console.error(JSON.stringify(error));
    process.exit(1);
  }

  process.exit(0);
}

await run();
