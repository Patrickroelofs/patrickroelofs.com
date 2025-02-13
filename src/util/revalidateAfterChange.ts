import { revalidatePath } from "next/cache";

function revalidateAfterChange({
  doc,
}: {
  doc: {
    slug: string;
  };
}) {
  if (doc.slug) {
    console.log("Revalidating...");
    revalidatePath("/", "layout");
  }
}

export { revalidateAfterChange };
