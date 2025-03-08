import { RichText } from "@/components/richtext";
import type { Blog } from "@/payload-types";
import type { ReactElement } from "react";

function PageTemplate(props: Blog): ReactElement {
  return (
    <RichText
      blockName="RichText"
      blockType="RichText"
      richText={props.content.content}
    />
  );
}

export { PageTemplate };
