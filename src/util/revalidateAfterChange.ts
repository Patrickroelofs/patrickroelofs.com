import { revalidatePath } from "next/cache";

function revalidateAfterChange({
  doc,
  previousDoc,
}: {
  doc: {
    slug: string;
    _status: "published" | "draft";
  };
  previousDoc: unknown;
}) {
  if (doc.slug && doc._status === "published" && doc !== previousDoc) {
    console.log("Revalidating...");
    revalidatePath("/", "layout");
  }
}

export { revalidateAfterChange };
