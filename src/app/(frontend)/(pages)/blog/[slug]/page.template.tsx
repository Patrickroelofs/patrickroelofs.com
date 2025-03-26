import { articleSchema, imageSchema } from "@/components/schema/schema";
import type { Blog, Media } from "@/payload-types";
import Script from "next/script";
import type { ReactElement } from "react";

function PageTemplate(props: Blog): ReactElement {
  const coverImage = props.coverImage as Media;

  const schema = [imageSchema(coverImage), articleSchema(props)];

  return (
    <>
      <Script type="application/ld+json" strategy="lazyOnload">
        {JSON.stringify(schema)}
      </Script>
    </>
  );
}

export { PageTemplate };
